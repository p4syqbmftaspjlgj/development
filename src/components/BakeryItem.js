import { Button, Card, CardContent, CardMedia, Typography, Box} from "@mui/material"
import { useState } from "react";


// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) { 
const [textState, setTextState] = useState("Add to menu");
    return (
        <Card sx={{ 
            width: 1, 
            height: 1,
            borderRadius: 20,
            }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                }}>
            <CardMedia 
                component='img'
                image={props.item.image}
                alt={"baked good"}
            />
            <Box
            sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    gap: '1rem',
                    padding: '1rem 1rem'
                }}
                >
                    <Box
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    gap: '1rem',
                    padding: '1rem 1rem'
                }}
                    >
                        <Button
                            style={{
                                backgroundColor: "#f65555",
                                borderRadius: 35,
                            }}
                            variant="contained" 
                            disableElevation
                            onClick={() => props.updateCart(props.index)}
                        >
                        {props.item.type}
                        </Button>
                        <Typography align='center'
                        sx={{ 
                            align: 'center',
                            fontSize: 'h6.fontSize', 
                            fontWeight: 'bold',
                            fontFamily: 'Monospace',
                            }}
                        > 
                        {props.item.name}
                        </Typography>
                        <Typography align='center'>
                            {props.item.description}
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: '1rem',
                        }}
                    >
                    {props.item.vegetarian === 'no' ? (
                        <Typography fontStyle='italic'>
                        {'Contains meat'}
                        </Typography>
                        ) : (
                            null
                    )}
                    {props.item.price <= 1 ? (
                        <Typography>
                        {props.item.price * 60 + ' minutes'}
                        </Typography>
                        ) : (
                        <Typography>
                        {props.item.price + ' hours'}
                        </Typography>
                        )}
                        <Button 
                            style={{
                                backgroundColor: "#21b6ae",
                                borderRadius: 35,
                            }}
                            variant="contained" 
                            disableElevation
                            onClick={() => {
                            props.updateCart(props.index); 
                            setTextState((state) => (state === "Remove from Menu" ? "Add to menu" : "Remove from Menu"))}
                            }>
                            {textState}
                        </Button>
                    </Box>   
                </Box>  
            </Box>
        </Card>
    )
}