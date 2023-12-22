// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie

import dynamic from "next/dynamic";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ResponsivePie = dynamic(
  () => import("@nivo/pie").then((module) => module.ResponsivePie),
  { ssr: false }
);
console.log(ResponsivePie);

const data = [
  {
    id: "cover",
    value: 40,
    color: "#ccc",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 60,
    color: "hsl(26, 70%, 50%)",
  },
];

const SkillsChart = () => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 0 }}
      startAngle={-180}
      innerRadius={0.45}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
  );
};

export default SkillsChart;
