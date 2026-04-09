import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/savedSlice";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function SavedPage() {
  const savedItems = useSelector((state) => state.saved.items);
  const dispatch = useDispatch();

  return (
    <Container>
      <Grid container spacing={2}>
        {savedItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.code}>
            <div>
              <h3>{item.product_name}</h3>

              <Button
                onClick={() => dispatch(removeItem(item.code))}
                variant="contained"
                color="error"
              >
                Remove
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SavedPage;