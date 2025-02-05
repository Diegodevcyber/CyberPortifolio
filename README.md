# Portfolio-CyberSec-D1xgx

# Deploy the portfolio

## With docker

```shell
docker run -d --name portfolio -p 3000:3000 0xtter/portfolio:1.0
```

## Whitout Docker

1. Install the dependencies:

    ```bash
    npm install --legacy-peer-deps
    ```

2. Run the Production server:

    ```bash
    npm run build
    ```

    ```bash
    npm run start
    ```
# Development

1. Install the dependencies:

    ```bash
    npm install --legacy-peer-deps
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
