import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import BlurText from '../components/BlurText';
import Galaxy from '../components/Galaxy';
import { galleryImages } from './galleryData';
import './Gallery.css';

function Gallery() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCompany, setSelectedCompany] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(null);

    // Group images by company
    const groupedByCompany = React.useMemo(() => {
        const grouped = {};
        galleryImages.forEach(item => {
            if (!grouped[item.company]) {
                grouped[item.company] = [];
            }
            grouped[item.company].push(item);
        });
        return grouped;
    }, []);

    // Get unique companies with their first image
    const companyCards = React.useMemo(() => {
        return Object.keys(groupedByCompany).map(company => ({
            company,
            firstImage: groupedByCompany[company][0],
            allImages: groupedByCompany[company]
        }));
    }, [groupedByCompany]);

    // Filter companies based on search query
    const filteredCompanies = React.useMemo(() => {
        if (!searchQuery.trim()) {
            return companyCards;
        }
        return companyCards.filter(card =>
            card.company.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [companyCards, searchQuery]);

    // Get images for selected company
    const companyImages = React.useMemo(() => {
        if (!selectedCompany) return [];
        return galleryImages.filter(img => img.company === selectedCompany.company);
    }, [selectedCompany]);

    // Reset scroll position to top when navigation changes
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCompany]);

    // If company is selected, show company gallery view
    if (selectedCompany) {
        return (
            <div className="gallery-container">
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    background: '#ffffff',
                    filter: 'blur(10px)',
                    transform: 'scale(1.1)'
                }}>
                    <Galaxy
                        mouseRepulsion={true}
                        mouseInteraction={true}
                        density={1.5}
                        glowIntensity={0.2}
                        saturation={1.0}
                        hueShift={240}
                        transparent={true}
                    />
                </div>

                {/* Breadcrumb Navigation */}
                <Box sx={{
                    width: '100%',
                    marginBottom: '30px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '20px'
                }}>
                    <Box
                        onClick={() => setSelectedCompany(null)}
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: '#666',
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#000'
                            }
                        }}
                    >
                        <FiArrowLeft style={{ fontSize: '20px' }} />
                        BACK
                    </Box>
                </Box>

                <BlurText
                    text={selectedCompany.company}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="gallery-main-title"
                />

                {/* Company Images Grid */}
                <Box sx={{ marginTop: '40px' }}>
                    <Grid container spacing={3} justifyContent="center">
                        {companyImages.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        height: '100%',
                                        width: '100%',
                                        maxWidth: '320px',
                                        margin: '0 auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: '#fff',
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px) scale(1.02)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                                            borderColor: 'rgba(0, 0, 0, 0.15)',
                                        }
                                    }}
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="320"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%'
                                        }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Lightbox Modal for full image view */}
                {selectedImage && (
                    <Box
                        onClick={() => setSelectedImage(null)}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            cursor: 'pointer',
                            padding: '20px'
                        }}
                    >
                        <Box sx={{ maxWidth: '90%', maxHeight: '90%' }}>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: '8px'
                                }}
                            />
                            <Typography
                                sx={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: '20px',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '1.2rem'
                                }}
                            >
                                {selectedImage.title}
                            </Typography>
                        </Box>
                    </Box>
                )}
            </div>
        );
    }

    // Main gallery view
    return (
        <div className="gallery-container">
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: '#ffffff',
                filter: 'blur(10px)', // Added background blur
                transform: 'scale(1.1)' // Scaled slightly to avoid blurry edges
            }}>
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={1.5}
                    glowIntensity={0.2}
                    saturation={1.0}
                    hueShift={240}
                    transparent={true}
                />
            </div>
            <BlurText
                text="Our Projects Gallery"
                delay={150}
                animateBy="words"
                direction="top"
                className="gallery-main-title"
            />

            {/* Search Bar */}
            <Box sx={{ width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                <TextField
                    placeholder="Search by company name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '12px',
                            fontFamily: "'Montserrat', sans-serif",
                            '& fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000',
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FiSearch style={{ color: '#666', fontSize: '20px' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Company Cards Grid */}
            <Box>
                <Grid container spacing={3} justifyContent="center">
                    {filteredCompanies.map((card) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={card.company}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    height: '100%',
                                    width: '100%',
                                    maxWidth: '320px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: '#fff',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'rgba(0, 0, 0, 0.15)',
                                    }
                                }}
                                onClick={() => setSelectedCompany(card)}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image={card.firstImage.image}
                                    alt={card.company}
                                    sx={{
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box sx={{
                                    padding: '16px',
                                    textAlign: 'center',
                                    backgroundColor: '#fff'
                                }}>
                                    <Typography className="card-company-name">
                                        {card.company}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {filteredCompanies.length === 0 && (
                    <Box sx={{
                        textAlign: 'center',
                        padding: '60px 20px',
                        color: '#999'
                    }}>
                        <Typography sx={{ fontFamily: "'Montserrat', sans-serif" }}>
                            No companies found matching "{searchQuery}"
                        </Typography>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default Gallery;
