"use client";

import React, {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";

function PortfolioThreeScene() {
  const mountRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {
    const mount =
      mountRef.current;

    if (!mount) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    if (
      reducedMotion.matches
    ) {
      return;
    }

    /* =====================================================
       SIZE
    ====================================================== */

    let width =
      mount.clientWidth;

    let height =
      mount.clientHeight;

    /* =====================================================
       SCENE
    ====================================================== */

    const scene =
      new THREE.Scene();

    /* =====================================================
       CAMERA
    ====================================================== */

    const camera =
      new THREE.PerspectiveCamera(
        55,
        width / height,
        0.1,
        100
      );

    camera.position.z = 7;

    /* =====================================================
       RENDERER
    ====================================================== */

    const renderer =
      new THREE.WebGLRenderer({
        alpha: true,

        antialias: false,

        powerPreference:
          "high-performance",
      });

    renderer.setSize(
      width,
      height
    );

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        1.75
      )
    );

    renderer.setClearColor(
      0x000000,
      0
    );

    renderer.domElement.setAttribute(
      "aria-hidden",
      "true"
    );

    mount.appendChild(
      renderer.domElement
    );

    /* =====================================================
       PARTICLE COUNT RESPONSIVE
    ====================================================== */

    const getParticleCount = () => {
      if (
        window.innerWidth <=
        480
      ) {
        return 150;
      }

      if (
        window.innerWidth <=
        768
      ) {
        return 220;
      }

      if (
        window.innerWidth <=
        1366
      ) {
        return 380;
      }

      if (
        window.innerWidth <=
        1920
      ) {
        return 520;
      }

      return 700;
    };

    const particleCount =
      getParticleCount();

    /* =====================================================
       PARTICLES
    ====================================================== */

    const positions =
      new Float32Array(
        particleCount * 3
      );

    const colors =
      new Float32Array(
        particleCount * 3
      );

    const blue =
      new THREE.Color(
        "#194BFD"
      );

    const purple =
      new THREE.Color(
        "#AD13FB"
      );

    for (
      let index = 0;
      index < particleCount;
      index++
    ) {
      const positionIndex =
        index * 3;

      positions[
        positionIndex
      ] =
        (Math.random() - 0.5) *
        15;

      positions[
        positionIndex + 1
      ] =
        (Math.random() - 0.5) *
        9;

      positions[
        positionIndex + 2
      ] =
        (Math.random() - 0.5) *
        5;

      const particleColor =
        blue
          .clone()
          .lerp(
            purple,
            Math.random()
          );

      colors[
        positionIndex
      ] = particleColor.r;

      colors[
        positionIndex + 1
      ] = particleColor.g;

      colors[
        positionIndex + 2
      ] = particleColor.b;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(
        colors,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        size:
          window.innerWidth <=
          768
            ? 0.025
            : 0.032,

        transparent: true,

        opacity: 0.5,

        vertexColors: true,

        depthWrite: false,

        sizeAttenuation: true,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );

    scene.add(particles);

    /* =====================================================
       SUBTLE WIREFRAME OBJECT
    ====================================================== */

    const wireGeometry =
      new THREE.IcosahedronGeometry(
        1.7,
        1
      );

    const wireMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x7d35ff,

        wireframe: true,

        transparent: true,

        opacity:
          window.innerWidth <=
          768
            ? 0.035
            : 0.075,
      });

    const wireObject =
      new THREE.Mesh(
        wireGeometry,
        wireMaterial
      );

    wireObject.position.x =
      window.innerWidth <=
      768
        ? 2
        : 3.1;

    wireObject.position.y =
      0.2;

    wireObject.position.z =
      -0.8;

    scene.add(wireObject);

    /* =====================================================
       SECOND SMALL OBJECT
    ====================================================== */

    const secondaryGeometry =
      new THREE.OctahedronGeometry(
        0.75,
        0
      );

    const secondaryMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x194bfd,

        wireframe: true,

        transparent: true,

        opacity: 0.06,
      });

    const secondaryObject =
      new THREE.Mesh(
        secondaryGeometry,
        secondaryMaterial
      );

    secondaryObject.position.set(
      -3.8,
      -2.2,
      -1
    );

    scene.add(
      secondaryObject
    );

    /* =====================================================
       POINTER
    ====================================================== */

    const pointer = {
      x: 0,
      y: 0,
    };

    const targetPointer = {
      x: 0,
      y: 0,
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      targetPointer.x =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      targetPointer.y =
        -(
          event.clientY /
          window.innerHeight
        ) *
          2 +
        1;
    };

    /* =====================================================
       SCROLL
    ====================================================== */

    let scrollPosition =
      window.scrollY;

    const handleScroll = () => {
      scrollPosition =
        window.scrollY;
    };

    /* =====================================================
       RESIZE
    ====================================================== */

    const handleResize = () => {
      width =
        mount.clientWidth;

      height =
        mount.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          1.75
        )
      );
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    /* =====================================================
       ANIMATION
    ====================================================== */

    const clock =
      new THREE.Clock();

    let animationFrameId = 0;

    const animate = () => {
      animationFrameId =
        window.requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      pointer.x +=
        (targetPointer.x -
          pointer.x) *
        0.025;

      pointer.y +=
        (targetPointer.y -
          pointer.y) *
        0.025;

      /* Slow particle field */

      particles.rotation.y =
        elapsed * 0.018;

      particles.rotation.x =
        pointer.y * 0.025;

      particles.position.x =
        pointer.x * 0.11;

      particles.position.y =
        -scrollPosition *
        0.00008;

      /* Main wireframe */

      wireObject.rotation.x =
        elapsed * 0.09 +
        pointer.y * 0.08;

      wireObject.rotation.y =
        elapsed * 0.12 +
        pointer.x * 0.1;

      wireObject.rotation.z =
        scrollPosition *
        0.00008;

      wireObject.position.y =
        0.2 +
        Math.sin(
          elapsed * 0.7
        ) *
          0.08;

      /* Secondary */

      secondaryObject.rotation.x =
        -elapsed * 0.12;

      secondaryObject.rotation.y =
        elapsed * 0.16;

      secondaryObject.position.y =
        -2.2 +
        Math.sin(
          elapsed * 0.9
        ) *
          0.06;

      /* Camera follows cursor slightly */

      camera.position.x +=
        (pointer.x *
          0.12 -
          camera.position.x) *
        0.025;

      camera.position.y +=
        (pointer.y *
          0.08 -
          camera.position.y) *
        0.025;

      camera.lookAt(
        scene.position
      );

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    /* =====================================================
       CLEANUP
    ====================================================== */

    return () => {
      window.cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      particleGeometry.dispose();

      particleMaterial.dispose();

      wireGeometry.dispose();

      wireMaterial.dispose();

      secondaryGeometry.dispose();

      secondaryMaterial.dispose();

      renderer.dispose();

      if (
        mount.contains(
          renderer.domElement
        )
      ) {
        mount.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="Port_ThreeScene"
      aria-hidden="true"
    />
  );
}

export default PortfolioThreeScene;