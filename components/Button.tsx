// import { forwardRef } from "react";
// import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
//   className,
//   children,
//   disabled,
//   type = 'button',
//   ...props
// }, ref) => {
//   return (
//     <button
//       type={type}
//       className={twMerge(
//         `
//         w-full 
//         rounded-full 
//         bg-green-500
//         border
//         border-transparent
//         px-3 
//         py-3 
//         disabled:cursor-not-allowed 
//         disabled:opacity-50
//         text-black
//         font-bold
//         hover:opacity-75
//         transition
//       `,
//         disabled && 'opacity-75 cursor-not-allowed',
//         className
//       )}
//       disabled={disabled}
//       ref={ref}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// });

// Button.displayName = "Button";

// export default Button;

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{}
const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
  children,
  className,
  type='button',
  disabled,
  ...props
},ref)=>{
  return <button type={type} className={twMerge(
    `
     rounded-lg hover:opacity-75 transition border border-transparent 
     bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed
     text-black w-full font-bold px-3 py-2
    `,
    className, 
    disabled && 'opacity-75 cursor-not-allowed'
  )} ref={ref} disabled={disabled} {...props}>
          {children}
      </button>
});

Button.displayName="Button"

export default Button