import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

// For screen calculation
import javafx.geometry.Rectangle2D;
import javafx.stage.Screen;

public class Example extends Application {
    @Override
    public void start(Stage primaryStage) {
//children
        VBox DOCUMENT_ROOT_NAME = new VBox();

//childrenAssignment
        Rectangle2D screenBounds = Screen.getPrimary().getBounds();
        double screenHeight = screenBounds.getHeight();
        double screenWidth = screenBounds.getWidth();

        long windowHeight = Math.round(screenHeight * 0.6);
        long windowWidth = Math.round(screenWidth * 0.6);

        Scene scene = new Scene(DOCUMENT_ROOT_NAME, windowWidth, windowHeight);
        primaryStage.setTitle("{title}");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
