import './Navigation.scss'
import { 
  IoHomeOutline,
  IoPeopleOutline,
  IoChatbubbleOutline,
  IoLogoApple,
  IoHelp,
  IoSettingsOutline,
  IoLockClosedOutline,
  IoLogOutOutline
} from "react-icons/io5";
import { Toggle } from './Toggle';
import useTheme from '../Provider/useTheme';

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <IoLogoApple />
            </span>
            <span className="title">Danilo Oliveira</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoHomeOutline />
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoPeopleOutline />
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoChatbubbleOutline />
            </span>
            <span className="title">Message</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoHelp />
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoSettingsOutline />
            </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoLockClosedOutline />
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoLogOutOutline />
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
      <Toggle isChecked={isDark} handleChange={toggleTheme} />
    </div>
  )
}