import gql from 'graphql-tag'

// import { controlledTokenBalanceFragment } from 'lib/fragments/controlledTokenBalanceFragment'

export const controlledTokenFragment = gql`
  fragment controlledTokenFragment on ControlledToken {
    id
    totalSupply

    name
    symbol
    decimals
    numberOfHolders
    
    # balances {
    #   ...controlledTokenBalanceFragment
    # }
  }
`
// ${controlledTokenBalanceFragment}
