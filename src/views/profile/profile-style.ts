import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  tabs_bar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#646464',
    height: '190px',
    width: '100%',
  },
  div_file: {
    flex: '1',
  },
  div_bar: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'space-between',
  },
  name_and_position: {
    display: 'flex',
    flexDirection: 'column'
  },
  menu_personal: {
    display: 'flex',
    flexDirection: 'row',
  },
  info_tabs: {
    display: 'flex',
    flexDirection: 'row',
  },
  left_info_user: {
    flex: '1',
  },
  tabs: {
    flex: '3',
  },
}));

export default useStyles;