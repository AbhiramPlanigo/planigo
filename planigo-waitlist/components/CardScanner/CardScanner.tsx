import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import styles from './CardScanner.module.css';

// --- Utils ---
const codeChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";
const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr: string[]) => arr[randInt(0, arr.length - 1)];

const generateCode = (width: number, height: number) => {
    const header = [
        "// compiled preview • scanner demo",
        "/* generated for visual effect */",
        "const SCAN_WIDTH = 8;",
        "const FADE_ZONE = 35;",
    ];
    const library = [...header];
    for (let i = 0; i < 20; i++) {
        library.push(`const v${i} = (${randInt(1, 9)} + ${randInt(10, 99)}) * 0.${randInt(1, 9)};`);
    }

    let flow = library.join(" ");
    flow = flow.replace(/\s+/g, " ").trim();
    const totalChars = width * height;
    while (flow.length < totalChars + width) {
        const extra = pick(library).replace(/\s+/g, " ").trim();
        flow += " " + extra;
    }

    let out = "";
    let offset = 0;
    for (let row = 0; row < height; row++) {
        let line = flow.slice(offset, offset + width);
        if (line.length < width) line = line + " ".repeat(width - line.length);
        out += line + (row < height - 1 ? "\n" : "");
        offset += width;
    }
    return out;
};

const calculateCodeDimensions = (cardWidth: number, cardHeight: number) => {
    const fontSize = 10;
    const lineHeight = 12;
    const charWidth = 6;
    const width = Math.floor(cardWidth / charWidth);
    const height = Math.floor(cardHeight / lineHeight);
    return { width, height, fontSize, lineHeight };
};

// --- Sub-components ---

const Card: React.FC<{ index: number }> = ({ index }) => {
    const asciiRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const normalCardRef = useRef<HTMLDivElement>(null);
    const asciiCardRef = useRef<HTMLDivElement>(null);

    const cardImages = [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80", // Taj Mahal
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80", // Goa
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80", // Kerala
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80", // Delhi
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80", // Varanasi
    ];

    useEffect(() => {
        // Initial Code Gen
        if (asciiRef.current) {
            const { width, height } = calculateCodeDimensions(400, 250);
            asciiRef.current.textContent = generateCode(width, height);
        }
    }, []);

    // Periodic ASCII update
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.15 && asciiRef.current) {
                const { width, height } = calculateCodeDimensions(400, 250);
                asciiRef.current.textContent = generateCode(width, height);
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.cardWrapper} card-wrapper-hook`} ref={wrapperRef}>
            <div className={`${styles.card} ${styles.cardNormal} card-normal-hook`} ref={normalCardRef}>
                <img
                    src={cardImages[index % cardImages.length]}
                    alt="Card"
                    className={styles.cardImage}
                    onError={(e) => {
                        // Fallback gradient if image fails
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.style.background = 'linear-gradient(45deg, #1a1a1a, #2d2d2d)';
                        }
                    }}
                />
            </div>

            <div className={`${styles.card} ${styles.cardAscii} card-ascii-hook`} ref={asciiCardRef}>
                <div className={styles.asciiContent} ref={asciiRef}></div>
            </div>
        </div>
    );
};

const CardScanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardLineRef = useRef<HTMLDivElement>(null);
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);
    const scannerCanvasRef = useRef<HTMLCanvasElement>(null);

    // Number of DOM cards to render for smooth infinite scrolling
    // 5 unique cards. We render 2 sets = 10 cards to cover screen + buffer.
    const CARD_COUNT = 10;
    const CARD_WIDTH = 400;
    const CARD_GAP = 60;
    const SINGLE_SET_WIDTH = (CARD_WIDTH + CARD_GAP) * 5;

    // Refs for animation loop values (avoid re-renders)
    const state = useRef({
        position: 0,
        velocity: 120, // Speed
        isDragging: false,
        lastMouseX: 0,
        mouseVelocity: 0,
        lastTime: 0,
        containerWidth: 0,
        cardLineWidth: 0,
        scanningActive: false,
    });

    // ... (ThreeJS omitted for brevity in this chunk if unchanged, but I need to target correctly)

    // Skipping to animate function logic modification...
    // I will target the animate function block itself for the logic change.


    // --- Particle System (Three.js) ---
    useEffect(() => {
        if (!particleCanvasRef.current) return;

        const canvas = particleCanvasRef.current;

        // Check if Three is available (in case load failed, though we used module import)
        // Basic setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            -window.innerWidth / 2, window.innerWidth / 2,
            125, -125, 1, 1000
        );
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, 250); // Height matches container roughly
        renderer.setClearColor(0x000000, 0);

        // Particles
        const particleCount = 400;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const velocities = new Float32Array(particleCount);
        const alphas = new Float32Array(particleCount);

        // Texture
        const texCanvas = document.createElement('canvas');
        texCanvas.width = 30; texCanvas.height = 30;
        const ctx = texCanvas.getContext('2d');
        if (ctx) {
            const grad = ctx.createRadialGradient(15, 15, 0, 15, 15, 15);
            grad.addColorStop(0, '#fff');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(15, 15, 15, 0, Math.PI * 2); ctx.fill();
        }
        const texture = new THREE.CanvasTexture(texCanvas);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
            positions[i * 3 + 2] = 0;
            colors[i * 3] = 0.5; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 1; // Blueish
            sizes[i] = Math.random() * 20 + 5;
            velocities[i] = Math.random() * 60 + 30;
            alphas[i] = Math.random();
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: { pointTexture: { value: texture } },
            vertexShader: `
          attribute float alpha;
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            vAlpha = alpha;
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 10.0; // simplified size logic
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
            fragmentShader: `
          uniform sampler2D pointTexture;
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
          }
        `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let frameId = 0;
        const animate = () => {
            const positions = particles.geometry.attributes.position.array as Float32Array;
            // const alphas = particles.geometry.attributes.alpha.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] += velocities[i] * 0.01; // Move right
                if (positions[i * 3] > window.innerWidth / 2 + 100) {
                    positions[i * 3] = -window.innerWidth / 2 - 100;
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            camera.left = -window.innerWidth / 2;
            camera.right = window.innerWidth / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, 250);
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    // --- Scanner Logic (2D Canvas) ---
    useEffect(() => {
        const canvas = scannerCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frameId = 0;
        let w = window.innerWidth;
        const h = canvas.height;
        canvas.width = w;

        const scannerX = w / 2;
        const scannerWidth = 4;

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);

            // Draw Scanner Line
            ctx.globalCompositeOperation = 'lighter';
            const grad = ctx.createLinearGradient(0, 0, 0, h);
            grad.addColorStop(0, 'transparent');
            grad.addColorStop(0.5, 'rgba(0, 255, 255, 0.8)');
            grad.addColorStop(1, 'transparent');

            ctx.fillStyle = grad;
            ctx.fillRect(scannerX - scannerWidth / 2, 0, scannerWidth, h);

            // Glow
            ctx.shadowBlur = 20;
            ctx.shadowColor = "cyan";
            ctx.fillRect(scannerX - 1, 0, 2, h);
            ctx.shadowBlur = 0;

            frameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            w = window.innerWidth;
            canvas.width = w;
        };
        window.addEventListener('resize', handleResize);

        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
        };
    }, []);

    // --- Scroll Logic ---
    const updateClipping = useCallback(() => {
        // We need to access DOM elements directly for performance
        const scannerX = window.innerWidth / 2;
        const scannerWidth = 8;
        const scannerLeft = scannerX - scannerWidth / 2;
        const scannerRight = scannerX + scannerWidth / 2;

        const wrappers = document.querySelectorAll('.card-wrapper-hook');
        wrappers.forEach(wrapper => {
            if (!(wrapper instanceof HTMLElement)) return;
            const rect = wrapper.getBoundingClientRect();

            // Check overlap
            const cardLeft = rect.left;
            const cardRight = rect.right;
            const cardWidth = rect.width;

            const normalCard = wrapper.querySelector('.card-normal-hook') as HTMLElement;
            const asciiCard = wrapper.querySelector('.card-ascii-hook') as HTMLElement;

            if (!normalCard || !asciiCard) return;

            if (cardLeft < scannerRight && cardRight > scannerLeft) {
                // Intersecting
                const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
                const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);

                const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
                const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

                normalCard.style.setProperty('--clip-right', `${normalClipRight}%`);
                asciiCard.style.setProperty('--clip-left', `${asciiClipLeft}%`);

                if (scannerIntersectLeft > 0 && !wrapper.getAttribute('data-scanned')) {
                    wrapper.setAttribute('data-scanned', 'true');
                    const effect = document.createElement('div');
                    effect.className = styles.scanEffect;
                    wrapper.appendChild(effect);
                    setTimeout(() => effect.remove(), 600);
                }

            } else {
                // Not intersecting
                if (cardRight < scannerLeft) {
                    // Left of scanner (Scanned) -> Keep as Code (Fully Revealed Ascii)
                    // We want it to stay scanned until it wraps around.

                    normalCard.style.setProperty('--clip-right', '100%'); // Full clip (Hidden Image)
                    asciiCard.style.setProperty('--clip-left', '100%');   // Full clip (Visible Ascii)

                } else if (cardLeft > scannerRight) {
                    // Right of scanner (Unscanned) -> Image
                    normalCard.style.setProperty('--clip-right', '0%');
                    asciiCard.style.setProperty('--clip-left', '0%');
                }
                wrapper.removeAttribute('data-scanned');
            }
        });
    }, []); // dependencies

    useEffect(() => {
        // Setup loop for movement
        let frameId = 0;
        let lastTime = 0;

        // Initialize dimensions
        if (containerRef.current && cardLineRef.current) {
            state.current.containerWidth = containerRef.current.offsetWidth;
            // Approx width based on CARD_COUNT cards
            state.current.cardLineWidth = (400 + 60) * CARD_COUNT;
        }

        const animate = (time: number) => {
            const dt = (time - lastTime) / 1000;
            lastTime = time;

            if (!state.current.isDragging) {
                let { position, velocity } = state.current;
                const { cardLineWidth, containerWidth } = state.current;

                position += velocity * -1 * (dt || 0.016); // Always move left (-1)

                // Seamless Loop Logic
                // We have 2 sets of cards. Total width = 2 * SINGLE_SET_WIDTH.
                // When we have scrolled past the first set (position < -SINGLE_SET_WIDTH),
                // we shift back to 0 (which looks identical).
                const singleSetWidth = (400 + 60) * 5; // 2300px

                if (position <= -singleSetWidth) {
                    position += singleSetWidth;
                } else if (position > 0) {
                    position -= singleSetWidth;
                }

                state.current.position = position;

                if (cardLineRef.current) {
                    cardLineRef.current.style.transform = `translateX(${position}px)`;
                }
            }

            updateClipping();
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [updateClipping]);

    // Drag Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        state.current.isDragging = true;
        state.current.lastMouseX = e.clientX;
        if (document.body) document.body.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!state.current.isDragging) return;
        const delta = e.clientX - state.current.lastMouseX;
        state.current.lastMouseX = e.clientX;
        state.current.position += delta;

        if (cardLineRef.current) {
            cardLineRef.current.style.transform = `translateX(${state.current.position}px)`;
        }
        updateClipping();
    };

    const handleMouseUp = () => {
        if (state.current.isDragging) {
            state.current.isDragging = false;
            if (document.body) document.body.style.cursor = '';
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [updateClipping]);


    const cardIndices = Array.from({ length: CARD_COUNT }, (_, i) => i);

    return (
        <div className={styles.cardScannerWrapper}>
            <div className={styles.container} ref={containerRef}>
                <canvas className={styles.particleCanvas} ref={particleCanvasRef} />
                <canvas className={styles.scannerCanvas} ref={scannerCanvasRef} />

                <div
                    className={styles.cardStream}
                    id="cardStream"
                /* Mask not perfectly applied via CSS because masking is complex */
                >
                    <div
                        className={styles.cardLine}
                        ref={cardLineRef}
                        onMouseDown={handleMouseDown}
                    >
                        {cardIndices.map(i => <Card key={i} index={i} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardScanner;
