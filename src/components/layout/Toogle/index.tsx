import { IoMoon, IoSunny } from 'react-icons/io5'
import './Toggle.scss'

export const Toggle = ({
  handleChange,
  isChecked
}: {
  handleChange: React.ChangeEventHandler<HTMLInputElement>,
  isChecked: boolean
}) => {
  return (
    <div className="toggle-container">
      <span className="icon">
        {isChecked ? <IoMoon /> : <IoSunny />}
      </span>
      
      <input
        id="check"
        type="checkbox"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
        />
        <label htmlFor="check"></label>
    </div>
  )
}
