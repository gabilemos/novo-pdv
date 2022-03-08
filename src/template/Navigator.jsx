import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
import FeaturedVideo from '@mui/icons-material/FeaturedVideo';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import ManageAccounts from '@mui/icons-material/ManageAccounts';
import Inventory2 from '@mui/icons-material/Inventory2';
import AddLocationAlt from '@mui/icons-material/AddLocationAlt';
import AccountBox from '@mui/icons-material/AccountBox';
import PublishedWithChanges from '@mui/icons-material/PublishedWithChanges';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';

const categories = [
  {
    id: 'Caixa',
    children: [
      {
        id: 'Nova Venda',
        icon: <AddShoppingCart />,
        active: true,
      },
      { id: 'Vendas em aberto', icon: <ProductionQuantityLimits />,},
      { id: 'Minhas Vendas', icon: <ShoppingCartCheckout /> },
      { id: 'Novo Cliente', icon: <PersonAddAlt /> },
      { id: 'Fechamentos', icon: <AccountBalanceWallet /> },
      { id: 'Produtos', icon: <FeaturedVideo /> },
    ],
  },
  {
    id: 'Controle de Estoque',
    children: [
      { id: 'Estoque de produtos', icon: <Inventory2 /> },
      { id: 'Solicitar Produto', icon: <AddLocationAlt /> },
      { id: 'Solicitar Troca', icon: <PublishedWithChanges /> },
    ],
  },
  {
    id: 'Opções da conta',
    children: [
      { id: 'Meu Perfil', icon: <AccountBox /> },
      { id: 'Alteração de perfil', icon: <ManageAccounts /> },
      { id: 'Deslogar', icon: < Logout/> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
        <Avatar sx={{ width: 56, height: 56 }}>
          <AccountCircle/>
        </Avatar>
          <p>Admin</p>
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Novidades</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
