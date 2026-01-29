export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-center py-4 text-sm text-muted-foreground dark:bg-black/50 sticky bottom-0">
      <p>
        Copyright &copy; {new Date().getFullYear()} Wakil Mahmud. All Rights
        Reserved.
      </p>
    </footer>
  );
}
