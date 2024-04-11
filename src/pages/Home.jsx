import { Box } from "@mui/material";
import InputFields from "../components/InputFields/InputFields";
import CountryCard from "../components/CountryCard/CountryCard";

const Home = ({ isDark, setIsDark }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        background: "--div-background-color",
        color: "--text-color",
        padding: "30px 20px",
        maxWidth: "1280px",
      }}
    >
      <InputFields isDark={isDark} setIsDark={setIsDark} />
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          background: "--div-background-color",
          color: "--text-color",
          padding: "0px 0px",
          gap: "0px",
        }}
      >
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </Box>
    </Box>
  );
};

export default Home;
