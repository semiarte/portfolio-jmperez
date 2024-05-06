import type { ExperienceT } from "../types";
import { Grid, Typography, Stack, Chip, } from "@mui/material";

type ExperienceProps = {
  experience: ExperienceT
}

export const Experience = ({experience} : ExperienceProps) => {

  const { job, company, date, img, label, description } = experience 
  return (
    <>
    <Grid item xs={1}>
          <img className="company-logo" src={`/logos/${img}.jpeg`} />
      </Grid>
      <Grid item xs={11}>
          <Typography variant="subtitle1">
              {job} 
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {company}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {date}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <Stack direction="row" spacing={1}>
            {label.map((item, index) => (
              <Chip 
                key={index}
                label={item} 
                color="primary" 
                variant="outlined"
              ></Chip>
            ))}
          </Stack>
      </Grid>
    </>
  )
}
