
// src/components/RecipeTable.js

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Rating, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';

const RecipeTable = ({ onRowClick }) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/recipes')
            .then(response => {
                
                // ---- YAHAN PAR DEBUGGING CODE DAALA GAYA HAI ----
                // Backend se jo data aaya hai, use console par print karo
                console.log("Data received from backend:", response.data);
                // ----------------------------------------------------

                setRows(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError("Failed to load recipes. Please ensure the backend server is running.");
                setLoading(false);
            });
    }, []);

    const columns = [
        { field: 'title', headerName: 'Recipe Name', flex: 1, minWidth: 250 },
        { field: 'cuisine', headerName: 'Cuisine', flex: 0.5, minWidth: 120 },
        {
            field: 'rating',
            headerName: 'Rating',
            flex: 0.5,
            minWidth: 150,
            renderCell: (params) => <Rating value={params.value} readOnly precision={0.5} />,
        },
        { field: 'totalTime', headerName: 'Total Time (min)', type: 'number', flex: 0.5, minWidth: 120 },
        { field: 'yields', headerName: 'Serves', flex: 0.5, minWidth: 120 },
    ];

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600 }}>
                <CircularProgress /> <Typography sx={{ ml: 2 }}>Loading Recipes...</Typography>
            </Box>
        );
    }
    
    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600 }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ height: 600, width: '100%', padding: 3 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowClick={(params) => onRowClick(params.row)}
                getRowId={(row) => row.id}
            />
        </Box>
    );
};

export default RecipeTable;