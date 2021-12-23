import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const AboutUs = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h2" component="h1" align="center" paragraph>
                    About
                </Typography>
                <Typography variant="body1" component="p" align="center" paragraph>
                    This application was created on my free time, as a way to learn / test technologies and is to be used publicly.
                    Fell <b>free</b> to use it and report me if you have any issues or suggestions. It is <b>forbidden</b> to use this web application 
                    for illegal activities.
                </Typography>
                <Typography variant="body1" component="p" align="center" paragraph>
                    This application was created with React and makes API calls to Azure Functions for the backend work. For database, 
                    I use CosmosDB.
                </Typography>
                <Typography variant="body1" component="p" align="center" paragraph>
                    <span>Here you can find the </span>
                    <Link 
                        href="https://github.com/fabiocosta89/redirectme"
                        target="_blank" 
                        rel="noopener"
                        underline="none"
                        >Source Code
                    </Link>
                    <span> for the project (React + Azure Functions).</span>
                </Typography>
            </Box>
        </Container>
    );
}

export default AboutUs;