import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import AOE from '../pages/areaofExp';
import './Service.css';
import ProjectManagement from './projectMan';

const services = [
    {
        id: 1,
        title: 'Civil & Interior Finishes',
        image: require('../asserts/civil-interior.jpg'),
        description: `Interior Finishes
Woodwork & Joinery
Civil and Interior Work
Gypsum Partitions`
    },
    {
        id: 2,
        title: 'Modular Furniture Solutions',
        image: require('../asserts/furniture.png'),
        description: `Modular Furniture
Loose Furniture
Chair
Decorative`
    },
    {
        id: 3,
        title: 'Smart MEP Services',
        image: require('../asserts/mep.png'),
        description:
            'Design, supply, and install efficient heating, ventilation and air conditioning systems promoting occupant comfort, health and energy savings.'
    },
    {
        id: 4,
        title: 'Plumbing',
        image: require('../asserts/plumbing.jpg'),
        description:
            'Handle complex plumbing projects with skill, providing properly designed drainage, water supply, firefighting and sanitary systems.'
    },
    {
        id: 5,
        title: 'Sprinkler Systems',
        image: require('../asserts/sprinkler.jpg'),
        description:
            'Equip buildings with intelligently engineered sprinkler systems for fire detection and suppression, optimizing safety.'
    },
    {
        id: 6,
        title: 'IT & Networking',
        image: require('../asserts/networking.jpg'),
        description:
            'Deploy robust, scalable IT infrastructure and networking solutions meeting connectivity, speed and reliability requirements.'
    }
];



function Service() {
    const scrollContainerRef = React.useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 250; // Card width (220) + gap approx

            if (direction === 'left') {
                // If at the beginning, jump to the end
                if (current.scrollLeft <= 0) {
                    current.scrollTo({ left: current.scrollWidth, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            } else {
                // If at the end, jump to the beginning
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered && scrollContainerRef.current) {
                const { current } = scrollContainerRef;
                // Check if we are at the end
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    // Loop back to start
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: 250, behavior: 'smooth' });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <Box sx={{
            padding: '40px 0px',
            marginTop: '80px',
            textAlign: 'center',
            position: 'relative' // For absolute positioning of arrows if needed, though we'll use flex row here
        }}>
            <Typography variant="h3" component="h1" sx={{
                marginBottom: '40px',
                fontWeight: 'bold',
                fontFamily: "'Montserrat', sans-serif"
            }}>
                Service We Provide
            </Typography>

            <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px' }}>
                {/* Left Arrow */}
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        left: '5%',
                        zIndex: 2,
                        width: '15px',
                        height: '15px',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    <i className="fa-solid fa-chevron-left" style={{ color: '#333' }}></i>
                </IconButton>

                {/* Scroll Container */}
                <Box
                    ref={scrollContainerRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '40px',
                        padding: '20px',
                        scrollBehavior: 'smooth',
                        width: '80vw', // Reduced width to make room for arrows
                        // Hide scrollbar
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none', // Firefox
                    }}
                >
                    {services.map((service) => (
                        <Card key={service.id} sx={{
                            minWidth: 320, // Increased from 220
                            maxWidth: 320, // Increased from 220
                            minHeight: 250, // Removed fixed height, using minHeight instead
                            flexShrink: 0,
                            borderRadius: '16px',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.4s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.15)', // Scale in all directions
                                zIndex: 10,
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                '& .card-background': {
                                    filter: 'blur(0px)', // Clear blur on hover
                                },
                            }
                        }}>
                            {/* Background Image */}
                            <Box
                                className="card-background"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${service.image})`, // Use local image
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'blur(8px)', // Initial blur
                                    transition: 'filter 0.4s ease-in-out',
                                    zIndex: 0,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
                                    }
                                }}
                            />

                            <CardActionArea
                                disableRipple
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                    zIndex: 1,
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Disable blue hover background
                                    }
                                }}
                            >
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    minHeight: 250, // Match card minHeight
                                    padding: '24px',
                                    textAlign: 'left',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    <Typography gutterBottom variant="h6" component="div" sx={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '700',
                                        fontSize: '1.2rem',
                                        color: '#fff', // White text for contrast
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                    }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '0.9rem',
                                        color: '#f0f0f0', // Light text
                                        whiteSpace: 'pre-line', // Preserve line breaks
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                                    }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>

                {/* Right Arrow */}
                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        right: '5%',
                        zIndex: 2,
                        width: '15px',
                        height: '15px',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    <i className="fa-solid fa-chevron-right" style={{ color: '#333' }}></i>
                </IconButton>
            </Box>
            <AOE />
            <ProjectManagement />
        </Box>
    );
}

export default Service;