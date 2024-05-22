// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardHolderNameText,
  CardHolderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = (event) => {
    // console.log(event.target.value)
    setCardNumber(event.target.value)
  }

  const onChangeCardName = (event) => {
    // console.log(event.target.value)
    setCardName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderNameText>CARDHOLDER NAME</CardHolderNameText>
            <CardHolderName>{cardName.toUpperCase()}</CardHolderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input type="text" placeholder="Card Number" value={cardNumber} onChange={onChangeCardNumber} />
          <Input type="text" placeholder="Cardholder Name" value={cardName} onChange={onChangeCardName} />
        </PaymentMethodContainer>
      </PaymentContainer>
    </AppContainer>
  )
}
export default CreditCard
