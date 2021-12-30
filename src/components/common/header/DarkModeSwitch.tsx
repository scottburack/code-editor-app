import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import { useAppSelector, useAppDispatch  } from '../../../store/slices/dark-mode/hooks';
import { toggleDarkMode } from '../../../store/slices/dark-mode/darkMode';
import { style } from '@mui/system';

const DarkModeSwitch = () => {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode())
  }


  return (
    <div>
      <DarkModeIcon />
      <Switch color="default" checked={isDarkModeEnabled} onChange={onChangeDarkMode} />
    </div>
  )
}

export default DarkModeSwitch
