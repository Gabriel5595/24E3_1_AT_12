import { Box, Typography, Grid, Paper, Divider } from '@mui/material';

import styles from "./home.module.css"

const items = [
    {
        id: 1,
        name: 'Camiseta',
        unitPrice: 49.99,
        quantity: 2,
    },
    {
        id: 2,
        name: 'Calça Jeans',
        unitPrice: 89.9,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Tênis',
        unitPrice: 120.0,
        quantity: 1,
    },
];

export default function Home() {
    const totalPurchase = items.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
    );

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Carrinho de Compras
            </Typography>
            {items.map((item) => {
                const totalItemPrice = item.unitPrice * item.quantity;
                return (
                    <Paper key={item.id} sx={{ padding: 2, marginBottom: 2 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Typography variant="subtitle1">{item.name}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1" align="right">
                                    {`R$ ${totalItemPrice.toFixed(2)}`}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">
                                    {`Valor unitário: R$ ${item.unitPrice.toFixed(2)}`}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">
                                    {`Quantidade: ${item.quantity}`}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2" align="right">
                                    {`Total: R$ ${totalItemPrice.toFixed(2)}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                );
            })}
            <Divider />
            <Box sx={{ paddingTop: 2 }}>
                <Typography variant="h6">
                    {`Valor Total da Compra: R$ ${totalPurchase.toFixed(2)}`}
                </Typography>
            </Box>
        </Box>
    );
}