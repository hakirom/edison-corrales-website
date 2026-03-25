import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, role, challenge } = body;

    // Validar datos requeridos
    if (!name || !email || !company || !role || !challenge) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log del formulario (en producción, guardar en BD o enviar email)
    console.log("New consultation request:", {
      name,
      email,
      company,
      role,
      challenge,
      timestamp: new Date().toISOString(),
    });

    // Aquí se podría integrar Resend, SendGrid, o cualquier servicio de email
    // Por ahora, solo retornamos un éxito
    // const response = await resend.emails.send({
    //   from: "noreply@edisoncorrales.com",
    //   to: "hello@edisoncorrales.com",
    //   replyTo: email,
    //   subject: `New Consultation Request from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Role: ${role}</p><p>Challenge: ${challenge}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: "Consultation request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
