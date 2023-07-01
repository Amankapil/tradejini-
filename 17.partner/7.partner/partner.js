fetch("./New Animation.json")
  .then((response) => response.json())
  .then((animationData) => {
    const container = document.getElementById("lottie-container");
    const animationOptions = {
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    };
    const anim = lottie.loadAnimation(animationOptions);
  })
  .catch((error) => {
    console.error("Error loading JSON file:", error);
  });
//   console.log("hello ")