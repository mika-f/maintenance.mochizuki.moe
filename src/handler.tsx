import { h, FunctionComponent } from "preact";
import render from "preact-render-to-string";
import styled, { ServerStyleSheet } from "styled-components";

const Centering = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ColumnCentering = styled(Centering)`
  flex-flow: column;
`;

const CircleImage = styled.img`
  display: block;
  border-radius: 999px;
`;

const ScreenSpace = styled.div`
  min-height: 100vh;
  max-height: 100%;
`;

const Maintenance: FunctionComponent = () => {
  return (
    <>
      <ScreenSpace>
        <ColumnCentering>
          <CircleImage src={"https://assets.mochizuki.moe/under-maintenance.png"} height={"200px"} />
          <p>メンテナンス中だよ！</p>
        </ColumnCentering>
      </ScreenSpace>
    </>
  );
};

const RenderAsString = () => {
  try {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles((<Maintenance />) as any) as any);
    const style = `
body {
  min-height: 100vh;
  max-height: 100%;
  margin: 0;
  background-color: #ccc;
}`;

    return render(
      <html>
        <head>
          <meta charSet={"utf-8"} />
          <title>Under Maintenance</title>
          <style>{style}</style>
          {sheet.getStyleElement()}
        </head>
        <body dangerouslySetInnerHTML={{ __html: html }} />
      </html>
    );
  } catch (e) {
    return "An Error Occurred.";
  }
};

export async function handleRequest(request: Request) {
  return new Response(RenderAsString(), {
    headers: {
      "content-type": "text/html"
    }
  });
}
