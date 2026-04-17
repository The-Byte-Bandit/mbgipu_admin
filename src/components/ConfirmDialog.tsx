'use client';

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md mx-4 rounded-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-6  border-border flex items-center gap-3">
          {isDestructive && (
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
          )}
          <h2 className="text-xl font-display font-bold text-foreground">{title}</h2>
        </div>

        {/* Message */}
        <div className="p-6 text-sm text-muted-foreground leading-relaxed">
          {message}
        </div>

        {/* Actions */}
        <div className="flex border-border p-4 gap-3 bg-secondary/50">
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex-1 font-body"
          >
            {cancelText}
          </Button>

          <Button
            onClick={onConfirm}
            className={`flex-1 font-body ${
              isDestructive 
                ? "bg-red-600 hover:bg-red-700 text-white" 
                : "bg-gradient-crimson hover:bg-gradient-crimson/90"
            }`}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}