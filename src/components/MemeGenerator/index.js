import {Component} from 'react'
import {
  AppContainer,
  MainBgContainer,
  MainSmContainer,
  MemeContainer,
  Heading,
  FormElement,
  LabelElement,
  InputElement,
  SelectElement,
  Button,
  ImageContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSizeValue: fontSizesOptionsList[0].optionId,
    displayMeme: false,
  }

  renderMemeImageMediumDevices = () => {
    const {imageUrl, topText, bottomText, fontSizeValue} = this.state
    return (
      <>
        <ImageContainer src={imageUrl}>
          <Paragraph fontSize={fontSizeValue}> {topText} </Paragraph>
          <Paragraph fontSize={fontSizeValue}> {bottomText} </Paragraph>
        </ImageContainer>
      </>
    )
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeValue: event.target.value})
  }

  onClickGenerateButton = event => {
    event.preventDefault()
    this.setState({displayMeme: true})
  }

  render() {
    const {displayMeme} = this.state
    return (
      <AppContainer data-testid="meme">
        <MainBgContainer>
          <MemeContainer>
            <Heading> Meme Generator </Heading>
            <FormElement type="onSubmit">
              <LabelElement htmlFor="imageUrl"> Image URL </LabelElement>
              <InputElement
                id="imageUrl"
                type="text"
                onChange={this.onChangeImageUrl}
              />

              <LabelElement htmlFor="topText"> Top Text </LabelElement>
              <InputElement
                id="topText"
                type="text"
                onChange={this.onChangeTopText}
              />

              <LabelElement htmlFor="bottomText"> Bottom Text </LabelElement>
              <InputElement
                id="bottomText"
                type="text"
                onChange={this.onChangeBottomText}
              />

              <LabelElement htmlFor="fontSize"> Font Size </LabelElement>
              <SelectElement
                as="select"
                id="fontSize"
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </SelectElement>
              <Button type="submit" onClick={this.onClickGenerateButton}>
                Generate
              </Button>
            </FormElement>
          </MemeContainer>
          {displayMeme ? this.renderMemeImageMediumDevices() : null}
        </MainBgContainer>

        <MainSmContainer>
          <MemeContainer>
            <Heading> Meme Generator </Heading>
            {displayMeme ? this.renderMemeImageMediumDevices() : null}
            <FormElement type="onSubmit">
              <LabelElement htmlFor="imageUrl"> Image URL </LabelElement>
              <InputElement
                id="imageUrl"
                type="text"
                onChange={this.onChangeImageUrl}
              />

              <LabelElement htmlFor="topText"> Top Text </LabelElement>
              <InputElement
                id="topText"
                type="text"
                onChange={this.onChangeTopText}
              />

              <LabelElement htmlFor="bottomText"> Bottom Text </LabelElement>
              <InputElement
                id="bottomText"
                type="text"
                onChange={this.onChangeBottomText}
              />

              <LabelElement htmlFor="fontSize"> Font Size </LabelElement>
              <SelectElement
                as="select"
                id="fontSize"
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </SelectElement>
              <Button type="submit" onClick={this.onClickGenerateButton}>
                Generate
              </Button>
            </FormElement>
          </MemeContainer>
        </MainSmContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
