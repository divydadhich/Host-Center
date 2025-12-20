import { BrowserRouter, Routes, Route } from "react-router-dom";

import HostCenter from "./pages/HostCenter";
import Wallet from "./pages/Balance";
// import Work from "./pages/Work";
// import Apply from "./pages/Apply";
import InviteBD from "./pages/InviteBD";
import Agent from "./pages/AgentList";
import Invite from "./pages/InviteAgent";
// import Settings from "./pages/Settings";
// import LeaveTeam from "./pages/LeaveTeam";
import MembersList from "./pages/MembersList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostCenter />} />
        <Route path="/wallet" element={<Wallet />} />
        {/* <Route path="/work" element={<Work />} /> */}
        <Route path="/bd" element={<InviteBD />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/members" element={<MembersList />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/leave-team" element={<LeaveTeam />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
