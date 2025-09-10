// // // // import React, { useState, useEffect, useRef, useCallback } from 'react';

// // // // const InfiniteCarousel = () => {
// // // //   const [itemCount, setItemCount] = useState(8);
// // // //   const [itemWidth] = useState(240);
// // // //   const [itemHeight] = useState(120);
// // // //   const [currentOffset, setCurrentOffset] = useState(0);
// // // //   const [isHovered, setIsHovered] = useState(false);
// // // //   const [isDragging, setIsDragging] = useState(false);

// // // //   const containerRef = useRef(null);
// // // //   const trackRef = useRef(null);
// // // //   const animationRef = useRef(null);
// // // //   const startXRef = useRef(0);
// // // //   const startOffsetRef = useRef(0);
// // // //   const lastMoveTimeRef = useRef(0);
// // // //   const cloneCountRef = useRef(0);

// // // //   // Calculate clone count based on container width
// // // //   const calculateCloneCount = useCallback(() => {
// // // //     if (containerRef.current) {
// // // //       return Math.ceil(containerRef.current.offsetWidth / itemWidth) + 2;
// // // //     }
// // // //     return 3;
// // // //   }, [itemWidth]);

// // // //   // Initialize positions
// // // //   useEffect(() => {
// // // //     const cloneCount = calculateCloneCount();
// // // //     cloneCountRef.current = cloneCount;
// // // //     setCurrentOffset(-cloneCount * itemWidth);
// // // //   }, [itemCount, itemWidth, calculateCloneCount]);

// // // //   // Auto scroll animation
// // // //   useEffect(() => {
// // // //     const autoScrollSpeed = 1;

// // // //     const animate = (currentTime) => {
// // // //       if (!isHovered && !isDragging) {
// // // //         if (currentTime - lastMoveTimeRef.current >= 16) {
// // // //           setCurrentOffset(prev => {
// // // //             const newOffset = prev - autoScrollSpeed;

// // // //             // Check for loop reset
// // // //             const totalWidth = itemCount * itemWidth;
// // // //             const resetThreshold = -totalWidth - (cloneCountRef.current * itemWidth);
// // // //             const resetPosition = -cloneCountRef.current * itemWidth;

// // // //             if (newOffset <= resetThreshold) {
// // // //               return resetPosition;
// // // //             }

// // // //             return newOffset;
// // // //           });

// // // //           lastMoveTimeRef.current = currentTime;
// // // //         }
// // // //       }

// // // //       animationRef.current = requestAnimationFrame(animate);
// // // //     };

// // // //     animationRef.current = requestAnimationFrame(animate);

// // // //     return () => {
// // // //       if (animationRef.current) {
// // // //         cancelAnimationFrame(animationRef.current);
// // // //       }
// // // //     };
// // // //   }, [isHovered, isDragging, itemCount, itemWidth]);

// // // //   // Handle drag start
// // // //   const handleStart = useCallback((e) => {
// // // //     setIsDragging(true);
// // // //     const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
// // // //     startXRef.current = clientX;
// // // //     startOffsetRef.current = currentOffset;
// // // //     e.preventDefault();
// // // //   }, [currentOffset]);

// // // //   // Handle drag move
// // // //   const handleMove = useCallback((e) => {
// // // //     if (!isDragging) return;

// // // //     const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
// // // //     const deltaX = clientX - startXRef.current;
// // // //     const newOffset = startOffsetRef.current + deltaX;

// // // //     setCurrentOffset(newOffset);
// // // //     e.preventDefault();
// // // //   }, [isDragging]);

// // // //   // Handle drag end
// // // //   const handleEnd = useCallback(() => {
// // // //     if (!isDragging) return;

// // // //     setIsDragging(false);

// // // //     // Check loop reset after drag
// // // //     setCurrentOffset(prev => {
// // // //       const totalWidth = itemCount * itemWidth;
// // // //       const resetThreshold = -totalWidth - (cloneCountRef.current * itemWidth);
// // // //       const resetPosition = -cloneCountRef.current * itemWidth;

// // // //       if (prev <= resetThreshold) {
// // // //         return resetPosition;
// // // //       }

// // // //       if (prev > resetPosition) {
// // // //         return resetThreshold + totalWidth;
// // // //       }

// // // //       return prev;
// // // //     });
// // // //   }, [isDragging, itemCount, itemWidth]);

// // // //   // Create items array with clones
// // // //   const createItems = () => {
// // // //     const items = [];
// // // //     const cloneCount = cloneCountRef.current;

// // // //     // Add leading clones
// // // //     for (let i = cloneCount - 1; i >= 0; i--) {
// // // //       const index = (itemCount - 1 - (i % itemCount));
// // // //       items.push({
// // // //         id: `clone-start-${i}`,
// // // //         content: `Item ${index + 1}`,
// // // //         isClone: true
// // // //       });
// // // //     }

// // // //     // Add original items
// // // //     for (let i = 0; i < itemCount; i++) {
// // // //       items.push({
// // // //         id: `original-${i}`,
// // // //         content: `Item ${i + 1}`,
// // // //         isClone: false
// // // //       });
// // // //     }

// // // //     // Add trailing clones
// // // //     for (let i = 0; i < cloneCount; i++) {
// // // //       const index = i % itemCount;
// // // //       items.push({
// // // //         id: `clone-end-${i}`,
// // // //         content: `Item ${index + 1}`,
// // // //         isClone: true
// // // //       });
// // // //     }

// // // //     return items;
// // // //   };

// // // //   const items = createItems();



// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
// // // //       <div className="w-full max-w-6xl">
// // // //         <div 
// // // //           ref={containerRef}
// // // //           className={`w-full overflow-hidden bg-white border border-gray-300 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
// // // //           style={{ height: `${itemHeight}px` }}
// // // //           onMouseEnter={() => setIsHovered(true)}
// // // //           onMouseLeave={() => {
// // // //             setIsHovered(false);
// // // //             setIsDragging(false);
// // // //           }}
// // // //           onMouseDown={handleStart}
// // // //           onMouseMove={handleMove}
// // // //           onMouseUp={handleEnd}
// // // //           onTouchStart={handleStart}
// // // //           onTouchMove={handleMove}
// // // //           onTouchEnd={handleEnd}
// // // //           onContextMenu={(e) => e.preventDefault()}
// // // //         >
// // // //           <div 
// // // //             ref={trackRef}
// // // //             className="flex h-full transition-transform duration-500 ease-out"
// // // //             style={{ 
// // // //               transform: `translateX(${currentOffset}px)`,
// // // //               willChange: 'transform'
// // // //             }}
// // // //           >
// // // //             {items.map((item, index) => (
// // // //               <div
// // // //                 key={item.id}
// // // //                 className="flex-shrink-0 h-full flex items-center justify-center bg-white border-r border-black text-black text-xl font-medium"
// // // //                 style={{ width: `${itemWidth}px` }}
// // // //               >
// // // //                 {item.content}
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Info */}
// // // //           <div className="absolute bottom-4 left-4 text-gray-600 text-sm bg-white px-4 py-2 border border-gray-300">
// // // //             Items: {itemCount} | Size: {itemWidth}×{itemHeight}px
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default InfiniteCarousel;

// // // import React, { useState, useEffect, useRef, useCallback } from 'react';

// // // const InfiniteCarousel = () => {
// // //   const [itemCount, setItemCount] = useState(8);
// // //   const [itemWidth] = useState(240);
// // //   const [itemHeight] = useState(120);
// // //   const [currentOffset, setCurrentOffset] = useState(0);
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const containerRef = useRef(null);
// // //   const trackRef = useRef(null);
// // //   const animationRef = useRef(null);
// // //   const startXRef = useRef(0);
// // //   const startOffsetRef = useRef(0);
// // //   const lastMoveTimeRef = useRef(0);
// // //   const cloneCountRef = useRef(0);
// // //   const intervalRef = useRef(null);

// // //   // Calculate clone count based on container width
// // //   const calculateCloneCount = useCallback(() => {
// // //     if (containerRef.current) {
// // //       return Math.ceil(containerRef.current.offsetWidth / itemWidth) + 2;
// // //     }
// // //     return 3;
// // //   }, [itemWidth]);

// // //   // Initialize positions
// // //   useEffect(() => {
// // //     const cloneCount = calculateCloneCount();
// // //     cloneCountRef.current = cloneCount;
// // //     setCurrentOffset(-cloneCount * itemWidth);
// // //   }, [itemCount, itemWidth, calculateCloneCount]);

// // //   // Auto scroll with intervals
// // //   useEffect(() => {
// // //     const startInterval = () => {
// // //       if (intervalRef.current) {
// // //         clearInterval(intervalRef.current);
// // //       }

// // //       intervalRef.current = setInterval(() => {
// // //         if (!isHovered && !isDragging && !isPaused) {
// // //           setCurrentIndex(prev => (prev + 1) % itemCount);
// // //         }
// // //       }, 1500); // 1.5 seconds interval
// // //     };

// // //     startInterval();

// // //     return () => {
// // //       if (intervalRef.current) {
// // //         clearInterval(intervalRef.current);
// // //       }
// // //     };
// // //   }, [isHovered, isDragging, isPaused, itemCount]);

// // //   // Update offset when currentIndex changes
// // //   useEffect(() => {
// // //     const cloneCount = cloneCountRef.current;
// // //     const targetOffset = -(cloneCount * itemWidth + currentIndex * itemWidth);
// // //     setCurrentOffset(targetOffset);
// // //   }, [currentIndex, itemWidth]);

// // //   // Handle drag start
// // //   const handleStart = useCallback((e) => {
// // //     setIsDragging(true);
// // //     const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
// // //     startXRef.current = clientX;
// // //     startOffsetRef.current = currentOffset;
// // //     e.preventDefault();
// // //   }, [currentOffset]);

// // //   // Handle drag move
// // //   const handleMove = useCallback((e) => {
// // //     if (!isDragging) return;

// // //     const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
// // //     const deltaX = clientX - startXRef.current;
// // //     const newOffset = startOffsetRef.current + deltaX;

// // //     setCurrentOffset(newOffset);
// // //     e.preventDefault();
// // //   }, [isDragging]);

// // //   // Handle drag end
// // //   const handleEnd = useCallback(() => {
// // //     if (!isDragging) return;

// // //     setIsDragging(false);

// // //     // Check loop reset after drag
// // //     setCurrentOffset(prev => {
// // //       const totalWidth = itemCount * itemWidth;
// // //       const resetThreshold = -totalWidth - (cloneCountRef.current * itemWidth);
// // //       const resetPosition = -cloneCountRef.current * itemWidth;

// // //       if (prev <= resetThreshold) {
// // //         return resetPosition;
// // //       }

// // //       if (prev > resetPosition) {
// // //         return resetThreshold + totalWidth;
// // //       }

// // //       return prev;
// // //     });
// // //   }, [isDragging, itemCount, itemWidth]);

// // //   // Create items array with clones
// // //   const createItems = () => {
// // //     const items = [];
// // //     const cloneCount = cloneCountRef.current;

// // //     // Add leading clones
// // //     for (let i = cloneCount - 1; i >= 0; i--) {
// // //       const index = (itemCount - 1 - (i % itemCount));
// // //       items.push({
// // //         id: `clone-start-${i}`,
// // //         content: `Item ${index + 1}`,
// // //         isClone: true
// // //       });
// // //     }

// // //     // Add original items
// // //     for (let i = 0; i < itemCount; i++) {
// // //       items.push({
// // //         id: `original-${i}`,
// // //         content: `Item ${i + 1}`,
// // //         isClone: false
// // //       });
// // //     }

// // //     // Add trailing clones
// // //     for (let i = 0; i < cloneCount; i++) {
// // //       const index = i % itemCount;
// // //       items.push({
// // //         id: `clone-end-${i}`,
// // //         content: `Item ${index + 1}`,
// // //         isClone: true
// // //       });
// // //     }

// // //     return items;
// // //   };

// // //   // Navigation functions
// // //   const goToNext = () => {
// // //     setIsPaused(true);
// // //     setCurrentIndex(prev => (prev + 1) % itemCount);
// // //     setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
// // //   };

// // //   const goToPrev = () => {
// // //     setIsPaused(true);
// // //     setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
// // //     setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
// // //   };

// // //   const goToIndex = (index) => {
// // //     setIsPaused(true);
// // //     setCurrentIndex(index);
// // //     setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
// // //   };

// // //   const items = createItems();



// // //   return (
// // //     <div className="bg-gray-100 flex items-center justify-center p-5">
// // //       <div className="w-full">
// // //         <div
// // //           ref={containerRef}
// // //           className={`w-full flex-col overflow-hidden bg-white border border-gray-300 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
// // //           style={{ height: `${itemHeight}px` }}
// // //           onMouseEnter={() => setIsHovered(true)}
// // //           onMouseLeave={() => {
// // //             setIsHovered(false);
// // //             setIsDragging(false);
// // //           }}
// // //           onMouseDown={handleStart}
// // //           onMouseMove={handleMove}
// // //           onMouseUp={handleEnd}
// // //           onTouchStart={handleStart}
// // //           onTouchMove={handleMove}
// // //           onTouchEnd={handleEnd}
// // //           onContextMenu={(e) => e.preventDefault()}
// // //         >
// // //           <div
// // //             ref={trackRef}
// // //             className="flex h-[50px] transition-transform duration-500 ease-out"
// // //             style={{
// // //               transform: `translateX(${currentOffset}px)`,
// // //               willChange: 'transform'
// // //             }}
// // //           >
// // //             {items.map((item, index) => (
// // //               <div
// // //                 key={item.id}
// // //                 className="flex-shrink-0 h-[50px] flex items-center justify-center bg-white border-r border-black text-black text-xl font-medium"
// // //                 style={{ width: `${itemWidth}px` }}
// // //               >
// // //                 {item.content}
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Navigation Controls */}
// // //           <div className="flex border-4 border-black z-50 items-center gap-4">
// // //             {/* Previous Button */}
// // //             <button
// // //               onClick={goToPrev}
// // //               className="w-8 h-8 bg-white border border-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
// // //               aria-label="Previous item"
// // //             >
// // //               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // //               </svg>
// // //             </button>

// // //             {/* Dots */}
// // //             <div className="flex gap-2">
// // //               {Array.from({ length: itemCount }, (_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => goToIndex(index)}
// // //                   className={`w-3 h-3 border transition-colors duration-200 ${currentIndex === index
// // //                       ? 'bg-black border-black'
// // //                       : 'bg-white border-gray-400 hover:bg-gray-100'
// // //                     }`}
// // //                   aria-label={`Go to item ${index + 1}`}
// // //                 />
// // //               ))}
// // //             </div>

// // //             {/* Next Button */}
// // //             <button
// // //               onClick={goToNext}
// // //               className="w-8 h-8 bg-white border border-gray-400 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
// // //               aria-label="Next item"
// // //             >
// // //               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </button>
// // //           </div>

// // //           {/* Info */}
// // //           <div className=" text-gray-600 text-sm bg-white px-4 py-2 border border-gray-300">
// // //             Items: {itemCount} | Size: {itemWidth}×{itemHeight}px | Current: {currentIndex + 1}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default InfiniteCarousel;

// import React, { useState, useEffect, useRef } from 'react';

// const InfiniteCarousel = ({ items, itemWidth }) => {
//   // State for automatic movement position (index of slides)
//   const [position, setPosition] = useState(0);
//   // State to toggle transition for smooth movement or instant reset
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   // Dragging states
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const [currentTranslate, setCurrentTranslate] = useState(0);
//   // Ref to manage the interval
//   const intervalRef = useRef(null);
//   // Number of unique items
//   const x = items.length;
//   // Three sets of items for infinite looping
//   const slides = [...items, ...items, ...items, ...items];

//   // Automatic movement with 2s delay + 0.5s transition
//   useEffect(() => {
//     if (!isDragging) {
//       intervalRef.current = setInterval(() => {
//         setIsTransitioning(true);
//         setPosition((prev) => prev + 1);
//       }, 2500); // 2s delay + 0.5s transition
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isDragging]);

//   // Reset position when a full set has moved
//   useEffect(() => {
//     if (position >= x) {
//       // Wait for transition to complete before instant reset
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setPosition(0);
//       }, 500); // Matches transition duration
//     }
//   }, [position, x]);

//   // Sync currentTranslate with position when not dragging
//   useEffect(() => {
//     if (!isDragging) {
//       setCurrentTranslate(position * itemWidth);
//     }
//   }, [position, isDragging, itemWidth]);

//   // Dragging event handlers
//   const handleDragStart = (clientX) => {
//     setIsDragging(true);
//     setStartX(clientX);
//     setDragOffset(currentTranslate);
//   };

//   const handleDragMove = (clientX) => {
//     if (isDragging) {
//       const delta = clientX - startX;
//       setCurrentTranslate(dragOffset - delta);
//     }
//   };

//   const handleDragEnd = (clientX) => {
//     setIsDragging(false);
//     const delta = clientX - startX;
//     const newTranslate = dragOffset - delta;
//     const nearestK = Math.round(newTranslate / itemWidth);
//     // Wrap position within 0 to x-1
//     const wrappedK = ((nearestK % x) + x) % x;
//     setPosition(wrappedK);
//     setCurrentTranslate(wrappedK * itemWidth);
//     setIsTransitioning(true);
//   };

//   // Mouse event handlers
//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     handleDragStart(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       e.preventDefault();
//       handleDragMove(e.clientX);
//     }
//   };

//   const handleMouseUp = (e) => {
//     if (isDragging) {
//       e.preventDefault();
//       handleDragEnd(e.clientX);
//     }
//   };

//   // Touch event handlers
//   const handleTouchStart = (e) => {
//     e.preventDefault();
//     handleDragStart(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging) {
//       e.preventDefault();
//       handleDragMove(e.touches[0].clientX);
//     }
//   };

//   const handleTouchEnd = (e) => {
//     if (isDragging) {
//       e.preventDefault();
//       // Use last touch position if available, else use mouseUp logic
//       const clientX = e.changedTouches[0]?.clientX || startX;
//       handleDragEnd(clientX);
//     }
//   };

//   // Global event listeners for mouse dragging
//   useEffect(() => {
//     const handleGlobalMouseMove = (e) => handleMouseMove(e);
//     const handleGlobalMouseUp = (e) => handleMouseUp(e);
//     window.addEventListener('mousemove', handleGlobalMouseMove);
//     window.addEventListener('mouseup', handleGlobalMouseUp);
//     return () => {
//       window.removeEventListener('mousemove', handleGlobalMouseMove);
//       window.removeEventListener('mouseup', handleGlobalMouseUp);
//     };
//   }, [isDragging, startX, dragOffset]);

//   // Styles for the slides container
//   const slidesStyle = {
//     transform: `translateX(-${currentTranslate}px)`,
//     transition: isTransitioning && !isDragging ? 'transform 0.5s ease' : 'none',
//   };

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       onMouseEnter={() => clearInterval(intervalRef.current)}
//       onMouseLeave={() => {
//         if (!isDragging) {
//           intervalRef.current = setInterval(() => {
//             setIsTransitioning(true);
//             setPosition((prev) => prev + 1);
//           }, 2500);
//         }
//       }}
//       onMouseDown={handleMouseDown}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="flex" style={slidesStyle}>
//         {slides.map((item, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             style={{ width: `${itemWidth}px` }}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfiniteCarousel;



// // import { useState, useEffect, useRef } from 'react';

// // const InfiniteCarousel = ({ items, itemWidth }) => {
// //   const [position, setPosition] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(true);
// //   const intervalRef = useRef(null);
// //   const timeoutRef = useRef(null);
// //   const x = items.length;
// //   const slides = [...items, ...items, ...items]; // Three sets for infinite scrolling

// //   // Set up automatic movement
// //   useEffect(() => {
// //     intervalRef.current = setInterval(() => {
// //       setPosition((prev) => prev + 1);
// //     }, 2500); // Move every 2.5 seconds
// //     return () => clearInterval(intervalRef.current);
// //   }, []);

// //   // Handle infinite loop reset
// //   useEffect(() => {
// //     if (position >= x) {
// //       const timer = setTimeout(() => {
// //         setIsTransitioning(false); // Disable transition for seamless reset
// //         setPosition(position - x); // Reset to equivalent slide in first set
// //         setTimeout(() => setIsTransitioning(true), 50); // Re-enable transition
// //       }, 500); // After the 0.5s transition
// //       return () => clearTimeout(timer);
// //     }
// //   }, [position, x]);

// //   // Handle next button click
// //   const handleNext = () => {
// //     clearInterval(intervalRef.current);
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     setPosition((prev) => (prev + 1) % x);
// //     timeoutRef.current = setTimeout(() => {
// //       intervalRef.current = setInterval(() => setPosition((prev) => prev + 1), 2500);
// //     }, 5000); // Resume after 5 seconds
// //   };

// //   // Handle previous button click
// //   const handlePrev = () => {
// //     clearInterval(intervalRef.current);
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     setPosition((prev) => (prev - 1 + x) % x);
// //     timeoutRef.current = setTimeout(() => {
// //       intervalRef.current = setInterval(() => setPosition((prev) => prev + 1), 2500);
// //     }, 5000); // Resume after 5 seconds
// //   };

// //   // Handle dot click
// //   const handleDotClick = (index) => {
// //     clearInterval(intervalRef.current);
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     setPosition(index);
// //     timeoutRef.current = setTimeout(() => {
// //       intervalRef.current = setInterval(() => setPosition((prev) => prev + 1), 2500);
// //     }, 5000); // Resume after 5 seconds
// //   };

// //   // Styles for sliding effect
// //   const slidesStyle = {
// //     transform: `translateX(-${position * itemWidth}px)`,
// //     transition: isTransitioning ? 'transform 0.5s ease' : 'none',
// //   };

// //   return (
// //     <div className="w-full">
// //       {/* Carousel Container */}
// //       <div
// //         className="relative overflow-hidden"
// //         onMouseEnter={() => clearInterval(intervalRef.current)} // Pause on hover
// //         onMouseLeave={() => {
// //           intervalRef.current = setInterval(() => setPosition((prev) => prev + 1), 2500); // Resume on leave
// //         }}
// //       >
// //         <div className="flex" style={slidesStyle}>
// //           {slides.map((item, index) => (
// //             <div key={index} className="flex-shrink-0" style={{ width: `${itemWidth}px` }}>
// //               {item}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Controls Container */}
// //       <div className="flex justify-center items-center mt-4">
// //         <button className="bg-gray-800 text-white p-2 rounded" onClick={handlePrev}>
// //           ←
// //         </button>
// //         <div className="flex space-x-2 mx-4">
// //           {items.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`w-3 h-3 rounded-full ${
// //                 index === position % x ? 'bg-accent-500' : 'bg-gray-300'
// //               }`}
// //               onClick={() => handleDotClick(index)}
// //             />
// //           ))}
// //         </div>
// //         <button className="bg-gray-800 text-white p-2 rounded" onClick={handleNext}>
// //           →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default InfiniteCarousel;