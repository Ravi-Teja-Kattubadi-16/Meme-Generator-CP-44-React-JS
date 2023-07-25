// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 2px solid black;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const MemeContainer = styled.div`
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 2px solid black;
  width: 100%;
  padding: 30px;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const MainSmContainer = styled(MemeContainer)`
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    //   border: 2px solid blue;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MainBgContainer = styled(MemeContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    width: 58%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Heading = styled.h1`
  display: flex;
  font-size: 30px;
  color: #35469c;
  align-self: center;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    color: #35469c;
    align-self: flex-start;
  }
`

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const InputElement = styled.input`
  //   width: 150%;
  width: 82vw;
  border: 1.5px solid #d7dfe9;
  border-radius: 3px;
  margin-top: 6px;
  padding: 15px;
  color: #5a7184;
  cursor: pointer;
  outline: none;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 330px;
    margin-bottom: 20px;
  }
`

export const SelectElement = styled(InputElement)`
  height: 50px;
  padding: 0px 14px 0px 14px;
  color: #1e293b;
  font-size: 15px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    height: 40px;
    margin-top: 6px;
  }
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 6px;
  width: 45%;
  font-family: 'Open Sans';
  padding: 12px 0px 12px 0px;
  border: 0;
  font-size: 14px;
  margin-top: 6px;
`

export const ImageContainer = styled(MemeContainer)`
  background-image: url(${props => {
    const bgUrlImage = props.src
    return bgUrlImage
  }});
  height: 340px;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    background-image: url(${props => {
      const bgUrlImage = props.src
      return bgUrlImage
    }});
    height: 300px;
    width: 420px;
    background-size: cover;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`
export const Paragraph = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  text-align: center;
  flex-wrap: wrap;
`
