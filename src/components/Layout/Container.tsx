'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

const containerSizes = {
  sm: 'max-w-2xl',      // 672px
  md: 'max-w-4xl',      // 896px  
  lg: 'max-w-6xl',      // 1152px
  xl: 'max-w-7xl',      // 1280px
  full: 'max-w-none',   // No max width
};

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        containerSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'dark' | 'darker' | 'accent';
  children: React.ReactNode;
}

const sectionSpacing = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-24', 
  lg: 'py-24 lg:py-32',
  xl: 'py-32 lg:py-40',
};

const sectionBackgrounds = {
  transparent: 'bg-transparent',
  dark: 'bg-nagara-dark',
  darker: 'bg-nagara-charcoal',
  accent: 'bg-nagara-accent',
};

export const Section: React.FC<SectionProps> = ({
  spacing = 'lg',
  background = 'transparent',
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        sectionSpacing[spacing],
        sectionBackgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-12',
};

const gridGaps = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Grid: React.FC<GridProps> = ({
  cols = 3,
  gap = 'lg',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid',
        gridCols[cols],
        gridGaps[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  children: React.ReactNode;
}

const flexDirections = {
  row: 'flex-row',
  col: 'flex-col',
};

const flexAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const flexJustify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const flexGaps = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  align = 'center',
  justify = 'start',
  gap = 'md',
  wrap = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex',
        flexDirections[direction],
        flexAlign[align],
        flexJustify[justify],
        flexGaps[gap],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  children: React.ReactNode;
}

const stackSpacing = {
  sm: 'space-y-2',
  md: 'space-y-4',
  lg: 'space-y-6',
  xl: 'space-y-8',
};

const stackAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

export const Stack: React.FC<StackProps> = ({
  spacing = 'md',
  align = 'stretch',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col',
        stackSpacing[spacing],
        stackAlign[align],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ResponsiveProps {
  children: React.ReactNode;
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
}

export const Responsive: React.FC<ResponsiveProps> = ({
  children,
  mobile,
  tablet,
  desktop,
}) => {
  return (
    <>
      {/* Mobile content */}
      {mobile && (
        <div className="block md:hidden">
          {mobile}
        </div>
      )}
      
      {/* Tablet content */}
      {tablet && (
        <div className="hidden md:block lg:hidden">
          {tablet}
        </div>
      )}
      
      {/* Desktop content */}
      {desktop && (
        <div className="hidden lg:block">
          {desktop}
        </div>
      )}
      
      {/* Default content (if no specific breakpoint content provided) */}
      {!mobile && !tablet && !desktop && children}
    </>
  );
};