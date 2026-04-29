"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, RenderTarget, Triangle, Vec2 } from "ogl";
import { profile } from "@/data/content";

export function BioluminescentHero() {
  return (
    <section className="relative min-h-screen min-h-[100svh] min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <BioFluidBackground />
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_36%,rgba(0,0,0,0.24)_62%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-20 flex min-h-screen min-h-[100svh] min-h-[100dvh] flex-col items-center justify-center px-5 pb-12 pt-28 text-center select-none sm:px-6 sm:pb-14 sm:pt-[7.5rem] md:pb-16 md:pt-36">
        <div className="pointer-events-none space-y-6 mix-blend-color-dodge md:space-y-8">
          <p className="animate-pulse text-[0.68rem] font-mono uppercase tracking-[0.38em] text-cyan-300/80 sm:text-xs md:text-base md:tracking-[0.5em]">
            Ahmedabad Based Flutter Developer
          </p>

          <h1 className="display-title font-black tracking-[-0.08em] text-white">
            <span className="block text-[1.95rem] leading-[0.95] sm:text-[2.45rem] md:text-[4rem] lg:text-[4.8rem]">
              {profile.name}
            </span>
            <span className="block bg-gradient-to-b from-white to-white/10 bg-clip-text text-[2.95rem] leading-[0.9] text-transparent sm:text-[3.8rem] md:text-8xl lg:text-9xl">
              {profile.title}
            </span>
          </h1>

          <p className="mx-auto max-w-[19rem] text-sm font-light leading-7 text-blue-100/60 sm:max-w-xl sm:text-base sm:leading-relaxed md:max-w-3xl md:text-lg">
            Building responsive Flutter applications with strong API integration,
            Dio-driven networking, Firebase-connected workflows, and reliable multi-platform delivery.
            <br />
            Flutter developer focused on real user-facing products and AI-assisted development.
          </p>
        </div>

        <div className="pointer-events-none mt-7 flex max-w-[21rem] flex-wrap items-center justify-center gap-2.5 text-[0.62rem] uppercase tracking-[0.14em] text-white/72 sm:max-w-2xl sm:text-xs md:mt-8 md:gap-3 md:text-sm md:tracking-[0.18em]">
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            {profile.location}
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            Dio / BLoC / Firebase
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            Flutter Developer & AI-Assisted Development
          </span>
        </div>

        <div className="pointer-events-auto mt-10 md:mt-12">
          <Link
            href="/projects"
            className="group relative inline-flex overflow-hidden border border-white/20 bg-transparent px-7 py-3.5 transition-all hover:border-cyan-400/50 sm:px-10 sm:py-4"
          >
            <div className="absolute inset-0 translate-y-full bg-cyan-500/10 transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative font-mono text-xs uppercase tracking-[0.28em] text-white transition-colors group-hover:text-cyan-300 sm:text-sm sm:tracking-widest">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function BioFluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const renderer = new Renderer({
      alpha: false,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;
    const webgl2 =
      "isWebgl2" in renderer
        ? Boolean((renderer as Renderer & { isWebgl2?: boolean }).isWebgl2)
        : false;
    const gl2 = gl as WebGL2RenderingContext;

    gl.getExtension("OES_texture_float");
    gl.getExtension("OES_texture_float_linear");

    const simFragment = /* glsl */ `
      precision highp float;

      uniform sampler2D uTexture;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMouseActive;
      uniform vec2 uResolution;
      uniform float uAspect;

      varying vec2 vUv;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(
          0.211324865405187,
          0.366025403784439,
          -0.577350269189626,
          0.024390243902439
        );
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(
          permute(i.y + vec3(0.0, i1.y, 1.0)) +
          i.x + vec3(0.0, i1.x, 1.0)
        );
        vec3 m = max(
          0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
          0.0
        );
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      vec2 curl(vec2 p) {
        float eps = 0.001;
        float n1 = snoise(p + vec2(0.0, eps));
        float n2 = snoise(p - vec2(0.0, eps));
        float a = (n1 - n2) / (2.0 * eps);
        n1 = snoise(p + vec2(eps, 0.0));
        n2 = snoise(p - vec2(eps, 0.0));
        float b = (n1 - n2) / (2.0 * eps);
        return vec2(a, -b);
      }

      void main() {
        vec2 uv = vUv;
        vec2 flow = curl(uv * 3.0 + uTime * 0.1);

        vec2 newUv = uv - flow * 0.004;
        newUv -= 0.5;
        newUv *= 0.998;
        newUv += 0.5;

        vec4 advected = texture2D(uTexture, newUv);

        vec2 mouse = uMouse;
        mouse.x *= uAspect;

        vec2 curUv = uv;
        curUv.x *= uAspect;

        float d = length(curUv - mouse);
        float brush = smoothstep(0.04, 0.0, d) * uMouseActive;
        vec3 inkColor = 0.5 + 0.5 * cos(uTime + uv.xyx + vec3(0.0, 2.0, 4.0));
        vec3 finalColor = advected.rgb + (inkColor * brush * 2.5);
        finalColor *= 0.98;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const displayFragment = /* glsl */ `
      precision highp float;

      uniform sampler2D uTexture;

      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        vec3 c = pow(color.rgb, vec3(1.2));
        float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
        c += noise * 0.01;
        gl_FragColor = vec4(c, 1.0);
      }
    `;

    const vertex = /* glsl */ `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const geometry = new Triangle(gl);

    const simProgram = new Program(gl, {
      vertex,
      fragment: simFragment,
      uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uMouse: { value: new Vec2(0, 0) },
        uMouseActive: { value: 0 },
        uResolution: { value: new Vec2(0, 0) },
        uAspect: { value: 1 },
      },
    });

    const displayProgram = new Program(gl, {
      vertex,
      fragment: displayFragment,
      uniforms: {
        uTexture: { value: null },
      },
    });

    const simMesh = new Mesh(gl, { geometry, program: simProgram });
    const displayMesh = new Mesh(gl, { geometry, program: displayProgram });

    const textureType = webgl2 ? gl2.HALF_FLOAT : gl.FLOAT;
    const internalFormat = webgl2 ? gl2.RGBA16F : gl.RGBA;

    let fboRead = new RenderTarget(gl, {
      width: Math.max(1, window.innerWidth >> 1),
      height: Math.max(1, window.innerHeight >> 1),
      type: textureType,
      internalFormat,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    let fboWrite = new RenderTarget(gl, {
      width: Math.max(1, window.innerWidth >> 1),
      height: Math.max(1, window.innerHeight >> 1),
      type: textureType,
      internalFormat,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const mouse = new Vec2(0, 0);
    const targetMouse = new Vec2(0, 0);
    let isMoving = 0;
    let stopTimer: number | undefined;
    let animationFrame = 0;

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      renderer.setSize(width, height);

      const fboWidth = Math.max(1, width >> 1);
      const fboHeight = Math.max(1, height >> 1);

      fboRead.setSize(fboWidth, fboHeight);
      fboWrite.setSize(fboWidth, fboHeight);

      simProgram.uniforms.uResolution.value.set(width, height);
      simProgram.uniforms.uAspect.value = width / height;
    };

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = 1 - (clientY - rect.top) / rect.height;

      targetMouse.set(x, y);
      isMoving = 1;

      if (stopTimer) {
        window.clearTimeout(stopTimer);
      }

      stopTimer = window.setTimeout(() => {
        isMoving = 0;
      }, 100);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateMouse(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (touch) {
        updateMouse(touch.clientX, touch.clientY);
      }
    };

    const update = (timeStamp: number) => {
      animationFrame = window.requestAnimationFrame(update);

      const time = timeStamp * 0.001;
      mouse.lerp(targetMouse, 0.2);

      simProgram.uniforms.uTime.value = time;
      simProgram.uniforms.uMouse.value.copy(mouse);
      simProgram.uniforms.uMouseActive.value +=
        (isMoving - simProgram.uniforms.uMouseActive.value) * 0.1;
      simProgram.uniforms.uTexture.value = fboRead.texture;

      renderer.render({ scene: simMesh, target: fboWrite });
      displayProgram.uniforms.uTexture.value = fboWrite.texture;
      renderer.render({ scene: displayMesh });

      const temp = fboRead;
      fboRead = fboWrite;
      fboWrite = temp;
    };

    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";

    container.appendChild(gl.canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    resize();
    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);

      if (stopTimer) {
        window.clearTimeout(stopTimer);
      }

      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }

      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
