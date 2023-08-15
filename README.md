# Tokopedia Play Clone Backend

This repository contains the backend code for the Tokopedia Play Clone project. It provides the necessary API endpoints for managing videos, products, and comments.

## API Endpoints

### Comments

Retrieve comments for a specific video.

- **GET** `/comment/by-video/:videoId`
  - `:videoId` (parameter): ID of the video
  - Returns an array of comments associated with the specified video.
  - Example: `/comment/by-video/123`

Add a new comment for a specific video.

- **POST** `/comment/by-video`
  - Request Body:
    - `videoId`: ID of the video
    - `message`: Comment message
    - `username`: User's username
  - Creates a new comment and associates it with the specified video.
  - Example Request:
    ```json
    {
      "videoId": "123",
      "message": "Great video!",
      "username": "user123"
    }
    ```

### Products

Retrieve products associated with a specific video.

- **GET** `/product/by-video/:videoId`
  - `:videoId` (parameter): ID of the video
  - Returns an array of products associated with the specified video.
  - Example: `/product/by-video/123`

Add a new product.

- **POST** `/product`
  - Request Body:
    - `url`: Product URL
    - `title`: Product title
    - `price`: Product price
    - `thumbnail`: URL to product thumbnail
    - `videoId`: ID of the video to associate the product with
  - Creates a new product and associates it with the specified video.
  - Example Request:
    ```json
    {
      "url": "https://example.com/product/123",
      "title": "Sample Product",
      "price": 19.99,
      "thumbnail": "https://example.com/product_thumbnail.jpg",
      "videoId": "123"
    }
    ```

### Videos

Retrieve video details by ID.

- **GET** `/video/:id`
  - `:id` (parameter): ID of the video
  - Returns details of the specified video.
  - Example: `/video/123`

Add a new video.

- **POST** `/video`
  - Request Body:
    - `author`: Video author's name
    - `title`: Video title
    - `thumbnail`: URL to video thumbnail
    - `url`: Video URL
  - Creates a new video entry.
  - Example Request:
    ```json
    {
      "author": "John Doe",
      "title": "Awesome Tutorial",
      "thumbnail": "https://example.com/video_thumbnail.jpg",
      "url": "https://example.com/video/123"
    }
    ```

## Setup and Usage

1. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/your-username/tokopedia-play-backend.git
