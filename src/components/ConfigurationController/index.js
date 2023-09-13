// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftContent = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightContent = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="bg-container">
          <div className="content-container">
            <h1 className="layout-heading">Layout</h1>
            <div>
              <div>
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftContent}
                  type="checkbox"
                  id="contentLeft"
                />
                <label htmlFor="contentLeft">Left Navbar</label>
              </div>
              <div>
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightContent}
                  type="checkbox"
                  id="contentRight"
                />
                <label htmlFor="contentRight">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
