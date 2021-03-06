import { connect } from 'react-redux'
import { openModal } from '../../../modules/modal/actions'
import { RootState } from '../../../modules/reducer'
import AccountCard from './AccountCard'
import {
  MapDispatch,
  MapDispatchProps,
  MapStateProps,
} from './AccountCard.types'

const mapState = (_state: RootState): MapStateProps => ({})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onSeeAll: (transactions) =>
    dispatch(openModal('SeeAllTransactionModal', { transactions })),
})

export default connect(mapState, mapDispatch)(AccountCard)
