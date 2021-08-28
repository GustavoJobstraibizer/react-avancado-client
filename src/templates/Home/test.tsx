import { screen } from '@testing-library/react'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import { renderWithTheme } from 'utils/test-utils'
import Home, { HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock bannerslider"></div>
    }
  }
})

describe('Home', () => {
  it('should render Banner and Showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('mock bannerslider')).toBeInTheDocument()
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(5)
  })
})
