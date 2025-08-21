
import React from 'react';
import {
    Drawer, Box, Typography, IconButton, Divider,
    Table, TableBody, TableCell, TableContainer, TableRow, Paper,
    Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Ingredients 

const RecipeDetailDrawer = ({ recipe, open, onClose }) => {
    if (!recipe) {
        return null;
    }

    const nutritionData = recipe.nutrition ? Object.entries(recipe.nutrition) : [];

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 450, padding: 3, height: '100%', overflowY: 'auto' }}>

                {/* === Header Section === */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="h5" component="div">{recipe.title}</Typography>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>{recipe.cuisine}</Typography>
                <Divider sx={{ marginY: 2 }} />

                {/* === Description Section === */}
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                    {recipe.description || "No description available."}
                </Typography>

                {/* === Time & Nutrition Section (Ek Box mein) === */}
                <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                    {/* Time */}
                    {recipe.time && (
                        <Accordion sx={{ flex: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Total Time: {recipe.time.total}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Prep: {recipe.time.prep}</Typography>
                                <Typography>Cook: {recipe.time.cook}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )}
                    {/* Nutrition */}
                    <Accordion sx={{ flex: 1 }}>
                         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Nutrition</Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        {nutritionData.map(([key, value]) => (
                                            <TableRow key={key}>
                                                <TableCell sx={{ textTransform: 'capitalize', border: 'none', padding: '2px 8px' }}>{key}</TableCell>
                                                <TableCell align="right" sx={{ border: 'none', padding: '2px 8px' }}>{value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                         </AccordionDetails>
                    </Accordion>
                </Box>

                {/* === Ingredients Section === */}
                <Typography variant="h6" gutterBottom>Ingredients</Typography>
                <List dense>
                    {recipe.ingredients && recipe.ingredients.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon sx={{ minWidth: '32px' }}>
                                <CheckCircleOutlineIcon color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ marginY: 2 }} />

                {/* === Instructions Section === */}
                <Typography variant="h6" gutterBottom>Instructions</Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                    {recipe.instructions || "No instructions provided."}
                </Typography>

            </Box>
        </Drawer>
    );
};

export default RecipeDetailDrawer;