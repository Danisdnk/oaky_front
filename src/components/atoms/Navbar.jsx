import React, { useContext, useState, useEffect } from 'react';
import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'
import { NavLink, useHistory } from 'react-router-dom'
import { FaBookmark, FaChild, FaHome, FaRegAddressBook, FaUser } from 'react-icons/fa';
import { AuthContext } from './../../auth/AuthContext';
import { react } from '@babel/types';
import { context } from 'rc-image/lib/PreviewGroup';
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../controllers/auth';

export const Navbar = () => {
  // const { user: { name, logged }, dispatch } = useContext(AuthContext);

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);
  const [jwt, setjwt] = useState(localStorage.getItem('x') > 0)

  const handleLogout = () => {
    dispatch(startLogout());
    setjwt(true);
  }

  useEffect(() => {
    return () => { localStorage.clear() }
  }, [jwt])
  // const history = useHistory();

  // const handleLogout = () => {

  //   history.replace('/login');

  //   dispatch({
  //     type: types.logout
  //   });
  // }


  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item title="OAKY" icon={<FaHome />}>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/home"
          >
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item key="2" icon={<FaRegAddressBook />}>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/news"
          >

            Noticias

          </NavLink>
        </Menu.Item>

        {!jwt ?
          <>
            <Menu.Item key="4" icon={<FaChild />}  >
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/profile"
              >
                Perfil
              </NavLink>
            </Menu.Item>
          </>
          : <></>
        }

        <Menu.Item key="3" icon={<FaUser />} style={{ marginLeft: 'auto' }}>


          {!jwt ?
            < NavLink
              activeClassName="disabled"
              className="nav-item nav-link"
              exact
              to="/"
              onClick={handleLogout}
            >
              Bienvenido {(localStorage.getItem('nombre'))}
            </NavLink>

            :
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/login"
            >
              Iniciar sesion
            </NavLink>

          }

        </Menu.Item>
      </Menu>
    </Header >

  )
}
