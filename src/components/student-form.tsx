type Props = {
  name: string;
  age: number;
  branch: string;
  themeColor: string;
};

export function StudentFormCard({
  name,
  age,
  branch,
  themeColor,
}: Props) {
  return (
    <div
      style={{ borderColor: themeColor }}
      className="bg-white/20 border-2 p-6 rounded-xl text-white max-w-md w-full"
    >
      <h3 className="text-xl font-bold mb-4">Student Information</h3>
      <div className="space-y-2">
        <p className="text-lg">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-lg">
          <strong>Age:</strong> {age}
        </p>
        <p className="text-lg">
          <strong>Branch:</strong> {branch}
        </p>
      </div>
    </div>
  );
}