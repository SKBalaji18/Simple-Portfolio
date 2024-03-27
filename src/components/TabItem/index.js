import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeClassNme = isActive ? 'active-tab-btn' : ''
  const changeActiveTab = () => {
    onChangeActiveTab(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        onClick={changeActiveTab}
        type="button"
        className={`tab-btn ${activeClassNme}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
