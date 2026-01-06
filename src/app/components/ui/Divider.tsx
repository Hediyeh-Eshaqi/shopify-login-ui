export function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      {children && (
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-500">
            {children}
          </span>
        </div>
      )}
    </div>
  );
}
