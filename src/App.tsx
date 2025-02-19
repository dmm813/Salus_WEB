import './App.css'
import Calendar from './components/layout/Calendar';
import Navigation from './pages/Dashboard';
import useTheme from './Provider/useTheme';

export const App = () => {
  const { isDark } = useTheme();

  return (
    <section className="container vh-100" data-theme={isDark ? "dark" : "light"}>
      <Navigation/>
      <Calendar />
    </section>
  )
}
