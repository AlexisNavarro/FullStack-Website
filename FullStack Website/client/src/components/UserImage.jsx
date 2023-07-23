import {Box} from "@mui/material";


//this will be the profile image circle shape 
const UserImage = ({image, size = "60px"}) => {
    return(
        <Box width = {size} height = {size}>
            <img
                style={{objectFit: "cover", borderRadius: "50"}}
                width = {size}
                height = {size}
                alt = "user"
                src = {`http://localhost:3001/assets/${image}`} //grab the profile image
            />
        </Box>
    );
}

export default UserImage;