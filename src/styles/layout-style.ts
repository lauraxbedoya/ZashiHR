import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  top_bar: {
    backgroundColor: '#202020',
    width: '100%',
    height: '25px',
    display: 'flex',
    justifyContent: 'right',
    textAlign: 'center',
    alignItems: 'center'
  },
  header_bar: {
    display: 'flex',
    flexDirection: 'column'
  },
  logout_button: {
    borderBottom: 'none',
    backgroundColor: '#202020',
    color: 'white',
    textDecoration: 'none',
    marginRight: '6%',
    fontSize: '16px',
    padding: '4px 0',
  },
  settings_bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 6%',
    height: '70px',
    backgroundColor: '#ECECEC',
    alignItems: 'center'
  },
  settings_and_profile: {},
  menu_bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 6%',
    height: '40px',
    backgroundColor: '#393939',
    alignItems: 'center',
    color: 'white'
  },
  search: {},
  link_bar: {
    textDecoration: 'none',
    color: 'white',
    padding: '0 15px',
  },
}));

export default useStyles;