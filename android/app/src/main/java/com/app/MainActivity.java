package com.app;

import android.graphics.drawable.Drawable;
import android.support.v4.content.ContextCompat;
import android.widget.LinearLayout;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
  @Override
  public void addDefaultSplashLayout() {
      LinearLayout splash = new LinearLayout(this);
      Drawable splash_screen_bitmap = ContextCompat.getDrawable(getApplicationContext(),R.drawable.splash);
      splash.setBackground(splash_screen_bitmap);

      setContentView(splash);
  }
}