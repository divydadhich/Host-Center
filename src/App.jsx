import { BrowserRouter, Routes, Route } from "react-router-dom";

import HostCenter from "./pages/HostCenter";
import Wallet from "./pages/Wallet";
import Work from "./pages/Work";
import Apply from "./pages/Apply";
import Policy from "./pages/Policy";
import Invite from "./pages/Invite";
import HostReward from "./pages/HostReward";
import Settings from "./pages/Settings";
import LeaveTeam from "./pages/LeaveTeam";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostCenter />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/work" element={<Work />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/reward" element={<HostReward />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/leave-team" element={<LeaveTeam />} />
      </Routes>
    </BrowserRouter>
  );
}
