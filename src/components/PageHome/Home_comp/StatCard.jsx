import stats from "../Home_js/stats";

export default function StatCard({ icon, number, label }) {
  return (
    <div>
      {icon}
      {number}
      {label}
    </div>
  );
}
