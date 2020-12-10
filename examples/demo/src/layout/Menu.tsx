import * as React from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { useMediaQuery, Theme, Box, Button } from '@material-ui/core';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
} from 'react-admin';

import visitors from '../visitors';
import orders from '../orders';
import invoices from '../invoices';
import products from '../products';
import categories from '../categories';
import reviews from '../reviews';
import SubMenu from './SubMenu';
import { AppState } from '../types';

type MenuName = 'menuCatalog' | 'menuBanking' | 'menuCustomers' | 'menuSales';

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuBanking: true,
        menuCustomers: true,
        menuSales: true,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box mt={1}>
            {' '}
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNTE0cHgiIGhlaWdodD0iMTAzcHgiIHZpZXdCb3g9IjAgMCA1MTQgMTAzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkFydGJvYXJkIDI8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJBcnRib2FyZC0yIj4gICAgICAgICAgICA8cGF0aCBkPSJNNDEzLjY2OSw3NS40NTc0IEM0MDYuNzAzLDc1LjQ1NzQgNDAzLjUyOSw2OS41MTY0IDQwMy41MjksNjMuOTk2NCBDNDAzLjUyOSw1OC41NTA0IDQwNi43MDMsNTIuNjg5NCA0MTMuNjY5LDUyLjY4OTQgQzQyMC42MzUsNTIuNjg5NCA0MjMuODA4LDU4LjU1MDQgNDIzLjgwOCw2My45OTY0IEM0MjMuODA4LDY5LjUxNjQgNDIwLjYzNSw3NS40NTc0IDQxMy42NjksNzUuNDU3NCBMNDEzLjY2OSw3NS40NTc0IFogTTQxMy42NjksNDMuNzE5NCBDNDAxLjUxNCw0My43MTk0IDM5Mi42OTIsNTIuMjQ2NCAzOTIuNjkyLDYzLjk5NjQgQzM5Mi42OTIsNzYuMTU0NCA0MDEuNzEsODQuNjg3NCA0MTMuNjY5LDg0LjY4NzQgQzQyNS42MjcsODQuNjg3NCA0MzQuNjQ1LDc2LjA3MjQgNDM0LjY0NSw2My45OTY0IEM0MzQuNjQ1LDUyLjI0NjQgNDI1LjgyMyw0My43MTk0IDQxMy42NjksNDMuNzE5NCBMNDEzLjY2OSw0My43MTk0IFogTTI5NC44OTIsNDQuODA4NCBMMjgxLjExNSw0NC44MDg0IEwyNjcuMzIyLDYwLjg2MDQgTDI2Ny4wODUsNjAuODYwNCBMMjY3LjA4NSwyMy40ODk0IEwyNTYuNDAzLDIzLjQ4OTQgTDI1Ni40MDMsODMuNDk0NCBMMjY3LjA4NSw4My40OTQ0IEwyNjcuMDg1LDY0LjQxMzQgTDI2Ny4zMjMsNjQuNDEzNCBMMjgxLjYzMiw4My40OTQ0IEwyOTUuNjksODMuNDk0NCBMMjc5LjA1OSw2Mi4zNTI0IEwyOTQuODkyLDQ0LjgwODQgWiBNMzE5LjU3Niw3NS40NTc0IEMzMTMuMTMyLDc1LjQ1NzQgMzA5LjI4Miw2OS43MDg0IDMwOS4yODIsNjQuMTUxNCBDMzA5LjI4Miw1OC42Mzk0IDMxMy4yMTcsNTIuNjg5NCAzMTkuNTc2LDUyLjY4OTQgQzMyNi40ODksNTIuNjg5NCAzMjkuOTI4LDU4LjU1MDQgMzI5LjkyOCw2My45OTY0IEMzMjkuOTI4LDY5LjY5MTQgMzI2LjE4Miw3NS40NTc0IDMxOS41NzYsNzUuNDU3NCBMMzE5LjU3Niw3NS40NTc0IFogTTMyMS42NzYsNDMuNzE5NCBDMzE2Ljc5MSw0My43MTk0IDMxMy4xOTEsNDUuODU0NCAzMDkuNzkzLDQ5LjAzOTQgTDMwOS41OTMsNDkuMDM5NCBMMzA5LjU5MywyMy40ODk0IEwyOTguOTExLDIzLjQ4OTQgTDI5OC45MTEsODMuNDk0NCBMMzA5LjEyNyw4My40OTQ0IEwzMDkuMTI3LDc4LjAyNjQgTDMwOS4yODYsNzguMDI2NCBDMzExLjY5NSw4MS45NzY0IDMxNi40OCw4NC41ODM0IDMyMS40NDQsODQuNTgzNCBDMzMyLjQ3MSw4NC41ODM0IDM0MC44Myw3NS45MjU0IDM0MC44Myw2My45OTY0IEMzNDAuODMsNTIuMjQ2NCAzMzIuNTY5LDQzLjcxOTQgMzIxLjY3Niw0My43MTk0IEwzMjEuNjc2LDQzLjcxOTQgWiBNNDgwLjA4Nyw0NC44MDg0IEw0NjYuMzEsNDQuODA4NCBMNDUyLjUxNyw2MC44NjA0IEw0NTIuMjgsNjAuODYwNCBMNDUyLjI4LDIzLjQ4OTQgTDQ0MS41OTcsMjMuNDg5NCBMNDQxLjU5Nyw4My40OTQ0IEw0NTIuMjgsODMuNDk0NCBMNDUyLjI4LDY0LjQxMzQgTDQ1Mi41MTgsNjQuNDEzNCBMNDY2LjgyNyw4My40OTQ0IEw0ODAuODg1LDgzLjQ5NDQgTDQ2NC4yNTQsNjIuMzUyNCBMNDgwLjA4Nyw0NC44MDg0IFogTTUwMC4yODIsNTkuNjgzNCBDNDk0Ljc4NSw1OC4zNzE0IDQ5Mi44NDcsNTcuNjY1NCA0OTIuODQ3LDU1LjQzODQgQzQ5Mi44NDcsNTIuMzY4NCA0OTYuNzM3LDUxLjY5NTQgNDk4LjQ5OCw1MS42OTU0IEM1MDEuODEzLDUxLjY5NTQgNTA1LjU1Nyw1My42NzQ0IDUwNi45NjYsNTUuNTUzNCBMNTEzLjI2NSw0OS41MTA0IEM1MTAuMzUyLDQ1Ljg1MTQgNTA0LjYyMyw0My43MTk0IDQ5OC41NzUsNDMuNzE5NCBDNDkwLjg0NCw0My43MTk0IDQ4Mi43MjYsNDcuNjA3NCA0ODIuNzI2LDU2LjI5NDQgQzQ4Mi43MjYsNjMuNzUzNCA0ODguNTcyLDY2LjAwNDQgNDk0LjI5Myw2Ny4zNzU0IEM1MDAuMzIyLDY4Ljc3OTQgNTAyLjQ3NCw2OS44MDU0IDUwMi40NzQsNzIuMjM0NCBDNTAyLjQ3NCw3NS44MTQ0IDQ5OC40MTEsNzYuMzk5NCA0OTcuMDEzLDc2LjM5OTQgQzQ5My41MTksNzYuMzk5NCA0ODkuNDY5LDc0LjM5ODQgNDg3LjI4NCw3MS44MDU0IEw0ODAuNzk5LDc4LjM3OTQgQzQ4NC4zNDIsODIuMzA4NCA0OTAuNDA2LDg0LjY3MjQgNDk2LjYyNCw4NC42NzI0IEM1MDcuMDY4LDg0LjY3MjQgNTEzLjI2NSw3OS42OTQ0IDUxMy4yNjUsNzEuNDc4NCBDNTEzLjI2NSw2My42MTg0IDUwNS42OCw2MC45NzY0IDUwMC4yODIsNTkuNjgzNCBMNTAwLjI4Miw1OS42ODM0IFogTTM2Ni43MjcsNzUuNDU3NCBDMzU5Ljc2MSw3NS40NTc0IDM1Ni41ODcsNjkuNTE2NCAzNTYuNTg3LDYzLjk5NjQgQzM1Ni41ODcsNTguNTUwNCAzNTkuNzYxLDUyLjY4OTQgMzY2LjcyNyw1Mi42ODk0IEMzNzMuNjkzLDUyLjY4OTQgMzc2Ljg2Niw1OC41NTA0IDM3Ni44NjYsNjMuOTk2NCBDMzc2Ljg2Niw2OS41MTY0IDM3My42OTMsNzUuNDU3NCAzNjYuNzI3LDc1LjQ1NzQgTDM2Ni43MjcsNzUuNDU3NCBaIE0zNjYuNzI3LDQzLjcxOTQgQzM1NC41NzIsNDMuNzE5NCAzNDUuNzUsNTIuMjQ2NCAzNDUuNzUsNjMuOTk2NCBDMzQ1Ljc1LDc2LjE1NDQgMzU0Ljc2OCw4NC42ODc0IDM2Ni43MjcsODQuNjg3NCBDMzc4LjY4NSw4NC42ODc0IDM4Ny43MDMsNzYuMDcyNCAzODcuNzAzLDYzLjk5NjQgQzM4Ny43MDMsNTIuMjQ2NCAzNzguODgxLDQzLjcxOTQgMzY2LjcyNyw0My43MTk0IEwzNjYuNzI3LDQzLjcxOTQgWiBNMTIzLjM5Nyw3NS40NTc0IEMxMTYuNzkyLDc1LjQ1NzQgMTEzLjAzNiw2OS42OTE0IDExMy4wMzYsNjMuOTk2NCBDMTEzLjAzNiw1OC41NTA0IDExNi40ODUsNTIuNjg5NCAxMjMuMzk3LDUyLjY4OTQgQzEyOS43NTYsNTIuNjg5NCAxMzMuNjkxLDU4LjYzOTQgMTMzLjY5MSw2NC4xNTE0IEMxMzMuNjkxLDY5LjcwODQgMTI5Ljg0MSw3NS40NTc0IDEyMy4zOTcsNzUuNDU3NCBMMTIzLjM5Nyw3NS40NTc0IFogTTEzMy43Nyw0OS43MTk0IEwxMzMuNTMzLDQ5LjcxOTQgQzEzMi4wMjQsNDguMDUwNCAxMjcuOTM1LDQzLjcxOTQgMTIxLjI5Nyw0My43MTk0IEMxMTAuNDA1LDQzLjcxOTQgMTAyLjAxMSw1Mi4yNDY0IDEwMi4wMTEsNjMuOTk2NCBDMTAyLjAxMSw3NS45MjU0IDEwOS43NTYsODQuNTgzNCAxMjAuNzg0LDg0LjU4MzQgQzEyNS43OTIsODQuNTgzNCAxMzAuNDk1LDgxLjkzMDQgMTMzLjIyMSw3OC44NDQ0IEwxMzMuMzgsNzguODQ0NCBMMTMzLjM4LDEwMi41NDU0IEwxNDQuMDYyLDEwMi41NDU0IEwxNDQuMDYyLDQ0LjgwODQgTDEzMy43Nyw0NC44MDg0IEwxMzMuNzcsNDkuNzE5NCBaIE0xNzguNzQyLDY2LjAxODQgQzE3OC43NDIsNzAuNTY0NCAxNzUuNzc5LDc1LjQ1NzQgMTcwLjI1Niw3NS40NTc0IEMxNjUuOTk4LDc1LjQ1NzQgMTYzLjcyNCw3Mi40MjA0IDE2My43MjQsNjYuMTc0NCBMMTYzLjcyNCw0NC44MDg0IEwxNTMuMDQyLDQ0LjgwODQgTDE1My4wNDIsNjguODE4NCBDMTUzLjA0Miw3Ni44MDc0IDE1Ny4wMjgsODQuNTgzNCAxNjcuNjg5LDg0LjU4MzQgQzE3Mi43MTYsODQuNTgzNCAxNzYuOTI3LDgwLjYyNjQgMTc5LjA0OSw3Ny43MDU0IEwxNzkuMjA5LDc3LjcwNTQgTDE3OS4yMDksODMuNDk0NCBMMTg5LjQyNCw4My40OTQ0IEwxODkuNDI0LDQ0LjgwODQgTDE3OC43NDIsNDQuODA4NCBMMTc4Ljc0Miw2Ni4wMTg0IFogTTE5OC4xNjcsODMuNDk0NCBMMjA4Ljg0OSw4My40OTQ0IEwyMDguODQ5LDQ0LjgwNzQgTDE5OC4xNjcsNDQuODA3NCBMMTk4LjE2Nyw4My40OTQ0IFogTTIzNi42NzMsNzUuNDU3NCBDMjMwLjE2OSw3NS40NTc0IDIyNi44OSw2OS42NDY0IDIyNi44OSw2NC4wMjc0IEMyMjYuODksNTguNDA5NCAyMzAuNDQ4LDUyLjg0NTQgMjM2LjM2MSw1Mi44NDU0IEMyMzkuMTMsNTIuODQ1NCAyNDIuNjMxLDU0LjIzNDQgMjQ0LjAwNSw1Ni4xODY0IEwyNTAuODksNDkuMzI2NCBDMjQ3LjU1Nyw0NS44MTU0IDI0Mi4yNDUsNDMuNzE5NCAyMzYuMzYxLDQzLjcxOTQgQzIyNC4zODcsNDMuNzE5NCAyMTUuNjk2LDUyLjMxMjQgMjE1LjY5Niw2NC4xNTE0IEMyMTUuNjk2LDc2LjE4MjQgMjI0LjI4OSw4NC41ODM0IDIzNi41OTUsODQuNTgzNCBDMjQyLjQ1LDg0LjU4MzQgMjQ3Ljg2MSw4Mi44NzA0IDI1MS4wNjksNzkuNDIxNCBMMjQ0LjM3Miw3Mi4yMzQ0IEMyNDIuODI1LDc0LjExNzQgMjM5LjU4Miw3NS40NTc0IDIzNi42NzMsNzUuNDU3NCBMMjM2LjY3Myw3NS40NTc0IFoiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNMCw0NS45OTk4IEMwLDIxLjE0NjggMjAuMTQ4LDAuOTk5OCA0NSwwLjk5OTggQzY5Ljg1MywwLjk5OTggOTAsMjEuMTQ2OCA5MCw0NS45OTk4IEM5MCw3MC44NTE4IDY5Ljg1Myw5MC45OTk4IDQ1LDkwLjk5OTggQzIwLjE0OCw5MC45OTk4IDAsNzAuODUxOCAwLDQ1Ljk5OTgiIGlkPSJGaWxsLTQiIGZpbGw9IiMyQ0EwMUMiPjwvcGF0aD4gICAgICAgICAgICA8cGF0aCBkPSJNNjAuMDA0NCwyOC41MDEyIEw1Ny41MDQ0LDI4LjUwMTIgTDU3LjUwNDQsMzUuMDAxMiBMNjAuMDA0NCwzNS4wMDEyIEM2Ni4wNjk0LDM1LjAwMTIgNzEuMDA0NCwzOS45MzYyIDcxLjAwNDQsNDYuMDAxMiBDNzEuMDA0NCw1Mi4wNjYyIDY2LjA2OTQsNTcuMDAxMiA2MC4wMDQ0LDU3LjAwMTIgTDUzLjk5NjQsNTcuMDAxMiBMNTMuOTk2NCwyMy4wMDEyIEM1My45OTY0LDE5LjQxMTIgNTEuMDg2NCwxNi41MDEyIDQ3LjQ5NjQsMTYuNTAxMiBMNDcuNDk2NCw2My41MDEyIEw2MC4wMDQ0LDYzLjUwMTIgQzY5LjY2OTQsNjMuNTAxMiA3Ny41MDQ0LDU1LjY2NjIgNzcuNTA0NCw0Ni4wMDEyIEM3Ny41MDQ0LDM2LjMzNjIgNjkuNjY5NCwyOC41MDEyIDYwLjAwNDQsMjguNTAxMiBNMTIuNDk1NCw0NS45OTgyIEMxMi40OTU0LDU1LjY2MzIgMjAuMzMwNCw2My40OTgyIDI5Ljk5NTQsNjMuNDk4MiBMMzIuNDk1NCw2My40OTgyIEwzMi40OTU0LDU2Ljk5ODIgTDI5Ljk5NTQsNTYuOTk4MiBDMjMuOTMwNCw1Ni45OTgyIDE4Ljk5NTQsNTIuMDY0MiAxOC45OTU0LDQ1Ljk5ODIgQzE4Ljk5NTQsMzkuOTMzMiAyMy45MzA0LDM0Ljk5ODIgMjkuOTk1NCwzNC45OTgyIEwzNi4wMDM0LDM0Ljk5ODIgTDM2LjAwMzQsNjguOTk4MiBDMzYuMDAzNCw3Mi41ODgyIDM4LjkxMzQsNzUuNDk4MiA0Mi41MDM0LDc1LjQ5ODIgTDQyLjUwMzQsMjguNDk4MiBMMjkuOTk1NCwyOC40OTgyIEMyMC4zMzA0LDI4LjQ5ODIgMTIuNDk1NCwzNi4zMzQyIDEyLjQ5NTQsNDUuOTk4MiIgaWQ9IkZpbGwtNyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzAuNjc2NiwyNC42NTA4IEMxNzAuNjc2NiwyNy4yNzU4IDE2OS4xOTk2LDI5Ljk4MTggMTY2LjA4NDYsMjkuOTgxOCBDMTYyLjkyNjYsMjkuOTgxOCAxNjIuMzkzNiwyNy4wNjk4IDE2Mi4zOTM2LDI0LjczMjggTDE2Mi4zOTM2LDEzLjgyNTggTDE1Ny40NzI2LDEzLjgyNTggTDE1Ny40NzI2LDI2LjEyNjggQzE1Ny40NzI2LDMwLjE0NjggMTU5LjYwNDYsMzQuMDgxOCAxNjQuNzMxNiwzNC4wODE4IEMxNjcuNjQxNiwzNC4wODE4IDE2OS45ODA2LDMyLjMxODggMTcwLjg0MDYsMzAuMzQ5OCBMMTcwLjkyMjYsMzAuMzQ5OCBMMTcwLjkyMjYsMzMuNTA3OCBMMTc1LjU5NzYsMzMuNTA3OCBMMTc1LjU5NzYsMTMuODI1OCBMMTcwLjY3NjYsMTMuODI1OCBMMTcwLjY3NjYsMjQuNjUwOCBaIE0xMzguMDkxNiwxOC4xNzM4IEwxNDMuNjA4NiwxOC4xNzM4IEwxNDMuNjA4NiwzMy41MDc4IEwxNDguNTI5NiwzMy41MDc4IEwxNDguNTI5NiwxOC4xNzM4IEwxNTQuMDQ2NiwxOC4xNzM4IEwxNTQuMDQ2NiwxMy44MTM4IEwxMzguMDkxNiwxMy44MTM4IEwxMzguMDkxNiwxOC4xNzM4IFogTTE4MC42MzQ2LDMzLjUwNzggTDE4NS41NTU2LDMzLjUwNzggTDE4NS41NTU2LDEzLjgyNDggTDE4MC42MzQ2LDEzLjgyNDggTDE4MC42MzQ2LDMzLjUwNzggWiBNMTg5LjAwMjYsMTMuODEzOCBMMTg5LjAwMjYsMTguMTczOCBMMTk0LjUyMDYsMTguMTczOCBMMTk0LjUyMDYsMzMuNTA3OCBMMTk5LjQ0MTYsMzMuNTA3OCBMMTk5LjQ0MTYsMTguMTczOCBMMjA0Ljk1ODYsMTguMTczOCBMMjA0Ljk1ODYsMTMuODEzOCBMMTg5LjAwMjYsMTMuODEzOCBaIE0xOTYuOTgwNiwxMS4yNDc4IEMxOTguNjIyNiwxMS4yNDc4IDE5OS45NTM2LDkuOTE1OCAxOTkuOTUzNiw4LjI3MzggQzE5OS45NTM2LDYuNjMxOCAxOTguNjIyNiw1LjI5OTggMTk2Ljk4MDYsNS4yOTk4IEMxOTUuMzM4Niw1LjI5OTggMTk0LjAwNzYsNi42MzE4IDE5NC4wMDc2LDguMjczOCBDMTk0LjAwNzYsOS45MTU4IDE5NS4zMzg2LDExLjI0NzggMTk2Ljk4MDYsMTEuMjQ3OCBMMTk2Ljk4MDYsMTEuMjQ3OCBaIE0xMDcuNDk3NiwzMy41MDc4IEwxMTIuNDE4NiwzMy41MDc4IEwxMTIuNDE4NiwxMy44MjQ4IEwxMDcuNDk3NiwxMy44MjQ4IEwxMDcuNDk3NiwzMy41MDc4IFogTTEyOC4zMjU2LDEzLjI1MDggQzEyNS40MTU2LDEzLjI1MDggMTIzLjA3NzYsMTUuMDE0OCAxMjIuMjE3NiwxNi45ODE4IEwxMjIuMTM0NiwxNi45ODE4IEwxMjIuMTM0NiwxMy44MjU4IEwxMTcuNDYxNiwxMy44MjU4IEwxMTcuNDYxNiwzMy41MDc4IEwxMjIuMzgwNiwzMy41MDc4IEwxMjIuMzgwNiwyMi42ODE4IEMxMjIuMzgwNiwyMC4wNTg4IDEyMy44NTc2LDE3LjM1MDggMTI2Ljk3MjYsMTcuMzUwOCBDMTMwLjEzMDYsMTcuMzUwOCAxMzAuNjY0NiwyMC4yNjM4IDEzMC42NjQ2LDIyLjU5OTggTDEzMC42NjQ2LDMzLjUwNzggTDEzNS41ODQ2LDMzLjUwNzggTDEzNS41ODQ2LDIxLjIwNTggQzEzNS41ODQ2LDE3LjE4NzggMTMzLjQ1MjYsMTMuMjUwOCAxMjguMzI1NiwxMy4yNTA4IEwxMjguMzI1NiwxMy4yNTA4IFogTTE0Ni4wNjk2LDExLjI0NzggQzE0Ny43MTE2LDExLjI0NzggMTQ5LjA0MjYsOS45MTU4IDE0OS4wNDI2LDguMjczOCBDMTQ5LjA0MjYsNi42MzE4IDE0Ny43MTE2LDUuMjk5OCAxNDYuMDY5Niw1LjI5OTggQzE0NC40Mjc2LDUuMjk5OCAxNDMuMDk1Niw2LjYzMTggMTQzLjA5NTYsOC4yNzM4IEMxNDMuMDk1Niw5LjkxNTggMTQ0LjQyNzYsMTEuMjQ3OCAxNDYuMDY5NiwxMS4yNDc4IEwxNDYuMDY5NiwxMS4yNDc4IFoiIGlkPSJGaWxsLTkiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==" />
            <Button className="newBtn">+ New</Button>
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            <SubMenu
                handleToggle={() => handleToggle('menuBanking')}
                isOpen={state.menuBanking}
                sidebarIsOpen={open}
                name="Banking"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/commands`}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/invoices`}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                sidebarIsOpen={open}
                name="Expenses"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/commands`}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/invoices`}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                sidebarIsOpen={open}
                name="Sales"
                icon={<products.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/products`}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<products.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/categories`}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={`/customers/create`}
                primaryText={translate(`Projects`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                sidebarIsOpen={open}
                name="Payroll"
                icon={<visitors.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/customers`}
                    primaryText={translate(`Customers`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`Reports`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`Taxes`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`Mileage`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`Accounting`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`My Accountant`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </Box>
    );
};

export default Menu;
