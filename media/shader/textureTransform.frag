#version 130

uniform sampler2D image1;

in vec4 fTexCoord;

out vec4 fragColor;

void main() {
  vec4 texCoord=fTexCoord;

  texCoord.xyz/=texCoord.w; // clip coordinates => ndc

  texCoord.xyz += 1.;
  texCoord.xyz /= 2.;

  //P3E1Q11
  if(texCoord.z>=-1 && texCoord.z<=1)
    fragColor=texture(image1,texCoord.xy);
  else
    fragColor=vec4(0,0,0,0);
}
