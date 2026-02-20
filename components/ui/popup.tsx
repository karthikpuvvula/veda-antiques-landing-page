'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PopupVariant = 'success' | 'error' | 'info' | 'warning';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    variant?: PopupVariant;
    duration?: number;
}

export function Popup({
    isOpen,
    onClose,
    message,
    variant = 'success',
    duration = 5000,
}: PopupProps) {
    const popupRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);

    // Capture the element that triggered the popup opening
    useEffect(() => {
        if (isOpen) {
            triggerRef.current = document.activeElement as HTMLElement;
        }
    }, [isOpen]);

    // Auto-close timer
    useEffect(() => {
        if (isOpen && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, duration, onClose]);

    // Restore focus to trigger element when popup closes
    useEffect(() => {
        if (!isOpen && triggerRef.current) {
            triggerRef.current.focus();
            triggerRef.current = null;
        }
    }, [isOpen]);

    // Focus trap and Escape key handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen || !popupRef.current) return;

        if (e.key === 'Escape') {
            onClose();
            return;
        }

        if (e.key === 'Tab') {
            const focusableElements = popupRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Focus the first focusable element when popup opens
    useEffect(() => {
        if (isOpen && popupRef.current) {
            const focusableElement = popupRef.current.querySelector<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            focusableElement?.focus();
        }
    }, [isOpen]);

    const getVariantStyles = () => {
        switch (variant) {
            case 'success':
                return {
                    container: "bg-veda-charcoal/95 border-veda-gold/50 text-veda-beige",
                    glow: "bg-veda-gold",
                    titleColor: "text-veda-gold",
                    icon: <CheckCircle className="w-6 h-6 text-veda-gold" />,
                    title: "SUCCESS"
                };
            case 'error':
                return {
                    container: "bg-red-950/95 border-red-500/30 text-white",
                    glow: "bg-red-500",
                    titleColor: "text-red-400",
                    icon: <XCircle className="w-6 h-6 text-red-400" />,
                    title: "ERROR"
                };
            case 'info':
                return {
                    container: "bg-blue-950/95 border-blue-400/30 text-blue-50",
                    glow: "bg-blue-400",
                    titleColor: "text-blue-400",
                    icon: <Info className="w-6 h-6 text-blue-400" />,
                    title: "INFO"
                };
            case 'warning':
                return {
                    container: "bg-amber-950/95 border-amber-500/30 text-amber-50",
                    glow: "bg-amber-500",
                    titleColor: "text-amber-400",
                    icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
                    title: "WARNING"
                };
            default:
                return {
                    container: "bg-veda-charcoal/95 border-veda-gold/50 text-veda-beige",
                    glow: "bg-veda-gold",
                    titleColor: "text-veda-gold",
                    icon: <CheckCircle className="w-6 h-6 text-veda-gold" />,
                    title: "SUCCESS"
                };
        }
    };

    const styles = getVariantStyles();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={popupRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${styles.title} notification`}
                    initial={{ opacity: 0, y: -50, scale: 0.9, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                    exit={{ opacity: 0, y: -20, scale: 0.9, x: "-50%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-8 left-1/2 z-50 max-w-sm w-full"
                    style={{ x: "-50%" }}
                >
                    <div
                        aria-live="polite"
                        className={cn(
                            "flex items-start gap-4 p-4 rounded-none border shadow-2xl backdrop-blur-md relative overflow-hidden",
                            styles.container
                        )}
                    >
                        {/* Background decorative glow */}
                        <div
                            className={cn(
                                "absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-20 pointer-events-none -mr-8 -mt-8",
                                styles.glow
                            )}
                        />

                        <div className="flex-shrink-0 mt-0.5 relative z-10">
                            {styles.icon}
                        </div>

                        <div className="flex-1 relative z-10">
                            <p className={cn(
                                "font-cinzel text-sm tracking-wider font-bold mb-1",
                                styles.titleColor
                            )}>
                                {styles.title}
                            </p>
                            <p className="font-montserrat text-sm leading-relaxed opacity-90">
                                {message}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            aria-label="Close notification"
                            className="flex-shrink-0 text-white/40 hover:text-white transition-colors relative z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Progress bar for auto-close */}
                        {duration > 0 && (
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: duration / 1000, ease: "linear" }}
                                className={cn(
                                    "absolute bottom-0 left-0 h-0.5 opacity-30",
                                    styles.glow
                                )}
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
