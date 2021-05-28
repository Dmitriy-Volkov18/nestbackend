import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start(){
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
    .setTitle("NestFullStack")
    .setDescription("Documentation")
    .setVersion("1.0.0")
    .addTag("NestFullstack")
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)

    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => console.log("Server started at port " + PORT))
}

start()